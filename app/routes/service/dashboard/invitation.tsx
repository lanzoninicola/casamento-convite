import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import FilterPartecipationBadges from "~/components/dashboard/components/FilterPartecipationBadges";
import SearchInput from "~/components/dashboard/components/SearchInput";
import Toolbar from "~/components/dashboard/components/Toolbar";
import ToolbarButton from "~/components/dashboard/components/ToolbarButton";
import BaseHeading from "~/components/shared/BaseHeadings";
import {
  EnvelopeIcon,
  FilterIcon,
  HumanIcon,
  MeatAndVegetableIcon,
  MeatIcon,
  PixIcon,
  SearchIcon,
  VegetableIcon,
} from "~/components/shared/Icons";
import { firestoreService } from "~/lib/firebase/db.server";
import { GiftCashType } from "~/modules/gifts/interface/gift.interface";
import GiftDatabaseService from "~/modules/gifts/services/gift-database.service";
import { InvitationModel } from "~/modules/invitations/models/invitation.model";
import Invitation from "~/modules/invitations/services/invitation.service";

export interface InvitationModelWithGift extends InvitationModel {
  giftType: GiftCashType;
}

export interface LoaderData {
  invitations: InvitationModelWithGift[];
}

// <meta name="robots" content="noindex,nofollow">
export const meta: MetaFunction = () => {
  return {
    robots: "noindex,nofollow",
  };
};

export const loader: LoaderFunction = async () => {
  const invitation = new Invitation(firestoreService);
  const invitationResponse = await invitation.getAll();

  const giftService = new GiftDatabaseService(firestoreService);
  const giftResponse = await giftService.getAll();

  let invitations: InvitationModel[] = [];

  if (invitationResponse.ok && invitationResponse.payload) {
    invitations = invitationResponse.payload;
  }

  if (giftResponse.ok && giftResponse.payload) {
    invitations = invitations.map((invitation) => {
      const gift = giftResponse.payload.find(
        (gift) => gift.guestName === invitation.guestName
      );

      if (gift) {
        return {
          ...invitation,
          giftType: gift.type,
        };
      }

      return invitation;
    });
  }

  return {
    invitations,
  };
};

export default function InvitationPage() {
  const { invitations }: LoaderData = useLoaderData();
  const [filteredInvitations, setFilteredInvitations] =
    React.useState(invitations);
  const [showFilterOptions, setShowFilterOption] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  function filterAll() {
    setFilteredInvitations(invitations);
  }

  function filterAttending() {
    setFilteredInvitations(
      invitations.filter((invitation) => invitation.willAttend)
    );
  }

  function filterNotAttending() {
    setFilteredInvitations(
      invitations.filter((invitation) => !invitation.willAttend)
    );
  }

  function onShowFilters() {
    setShowFilterOption(!showFilterOptions);
    setShowSearch(false);
  }

  function onShowSearchInput() {
    setShowSearch(!showSearch);
    setShowFilterOption(false);
  }

  function onSearchRecord(term: string) {
    const nextInvitations = invitations.filter((invitation) => {
      if (invitation.guestName.toLowerCase().includes(term.toLowerCase())) {
        return invitation;
      }
    });

    setFilteredInvitations(nextInvitations);
  }

  return (
    <>
      <BaseHeading mb="1rem" fontSize="22px">
        Lista de convidados
      </BaseHeading>
      <VStack align={"flex-start"} spacing={1}>
        <VStack align={"flex-start"} spacing={1} mb="1rem" w="100%">
          <Toolbar>
            <ToolbarButton
              icon={<FilterIcon size={16} />}
              label={"Filtrar"}
              onClick={onShowFilters}
            />
            <ToolbarButton
              icon={<SearchIcon size={16} />}
              label={"Buscar"}
              onClick={onShowSearchInput}
            />
          </Toolbar>
          {showFilterOptions && (
            <FilterPartecipationBadges
              filterAll={filterAll}
              filterAttending={filterAttending}
              filterNotAttending={filterNotAttending}
            />
          )}
          {showSearch && (
            <SearchInput onSearch={(term) => onSearchRecord(term)} />
          )}
        </VStack>
        <InvitationResponseList invitations={filteredInvitations} />
      </VStack>
    </>
  );
}

function InvitationResponseList({
  invitations,
}: {
  invitations: InvitationModelWithGift[];
}) {
  return (
    <Flex
      className="guest-list"
      direction="column"
      gap=".75rem"
      width={"100%"}
      justify="space-between"
    >
      {invitations.map((invitation, index) => (
        <InvitationRow key={index} invitationData={invitation} />
      ))}
    </Flex>
  );
}

/**
 *  guestName: string;
  willAttend: boolean;
  guests?: number;
  mealPreference?: string;
 */
function InvitationRow({
  invitationData,
}: {
  invitationData: InvitationModelWithGift;
}) {
  const guestsArray = Array.from({ length: invitationData.guests || 0 });

  return (
    <Box
      borderRadius={"10px"}
      boxShadow="sm"
      paddingBlock=".75rem"
      paddingInline={".5rem"}
      bg="white"
      w="100%"
    >
      <Flex direction="row" align="center" gap="1rem" justify={"space-between"}>
        <VStack align={"flex-start"} spacing={1} w="100%">
          <VStack w="100%" spacing={0} alignItems="flex-start">
            <Text fontSize="14px" fontWeight={700} letterSpacing={"-1px"}>
              Nome:
            </Text>
            <Text fontSize="16px" letterSpacing={"-.5px"}>
              {invitationData.guestName}
            </Text>
          </VStack>
          <HStack>
            <Text fontSize="14px" fontWeight={700} letterSpacing={"-1px"}>
              Participo:
            </Text>
            <Text fontSize="14px">
              {invitationData.willAttend ? "Sim" : "Não"}
            </Text>
          </HStack>
        </VStack>

        <HStack spacing={4} w="100%" justify={"flex-end"}>
          {invitationData.mealPreference === "carne" && <MeatIcon />}
          {invitationData.mealPreference === "vegetariano" && <VegetableIcon />}
          {invitationData.mealPreference === "indiferente" && (
            <MeatAndVegetableIcon />
          )}
          <HStack>
            {guestsArray.map((_, index) => {
              return <HumanIcon size={40} key={index} />;
            })}
          </HStack>
        </HStack>
      </Flex>
      <Divider marginBlock={".75rem"} />
      <HStack justify={"space-between"}>
        <Text fontSize="14px" fontWeight={700} letterSpacing={"-1px"}>
          Presente:
        </Text>
        {invitationData.giftType === "pix" && <PixIcon />}
        {invitationData.giftType === "envelope" && <EnvelopeIcon />}
      </HStack>
    </Box>
  );
}
