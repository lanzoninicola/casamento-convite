import {
  Badge,
  Box,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { InvitationModel } from "~/modules/invitations/models/invitation.model";
import BaseHeading from "../shared/BaseHeadings";
import {
  FilterIcon,
  HumanIcon,
  MeatAndVegetableIcon,
  MeatIcon,
  SearchIcon,
  VegetableIcon,
} from "../shared/Icons";

import ToolbarButton from "./components/ToolbarButton";

export default function GuestList({
  invitations,
}: {
  invitations: InvitationModel[];
}) {
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

  function onFilterRecord() {
    setShowFilterOption(!showFilterOptions);
    setShowSearch(false);
  }

  function onSearchRecord() {
    setShowSearch(!showSearch);
    setShowFilterOption(false);
  }

  return (
    <>
      <BaseHeading mb="1rem" fontSize="22px">
        Lista de convidados
      </BaseHeading>
      <VStack align={"flex-start"} spacing={1}>
        <VStack align={"flex-start"} spacing={1} mb="1rem" w="100%">
          <HStack w="100%" mb="1rem" className="toolbar">
            <ToolbarButton
              icon={<FilterIcon size={16} />}
              label={"Filtrar"}
              onClick={onFilterRecord}
            />
            <ToolbarButton
              icon={<SearchIcon size={16} />}
              label={"Buscar"}
              onClick={onSearchRecord}
            />
            {/* <SearchButton /> */}
          </HStack>
          {showFilterOptions && (
            <FilterBadges
              filterAll={filterAll}
              filterAttending={filterAttending}
              filterNotAttending={filterNotAttending}
            />
          )}
          {showSearch && <SearchInput />}
        </VStack>
        <ListOfGuests guests={filteredInvitations} />
      </VStack>
    </>
  );
}

function ListOfGuests({ guests }: { guests: InvitationModel[] }) {
  return (
    <Flex
      className="guest-list"
      direction="column"
      gap=".75rem"
      width={"100%"}
      justify="space-between"
    >
      {guests.map((guest, index) => (
        <GuestRow key={index} guest={guest} />
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
function GuestRow({ guest }: { guest: InvitationModel }) {
  const guestsArray = Array.from({ length: guest.guests || 0 });

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
          <HStack w="100%">
            <Text fontSize="14px" fontWeight={700} letterSpacing={"-.5px"}>
              Nome:
            </Text>
            <Text fontSize="16px" letterSpacing={"-.5px"}>
              {guest.guestName}
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="14px" fontWeight={700}>
              Participo:
            </Text>
            <Text fontSize="14px">{guest.willAttend ? "Sim" : "Não"}</Text>
          </HStack>
        </VStack>

        <HStack spacing={4} w="100%" justify={"flex-end"}>
          {guest.mealPreference === "carne" && <MeatIcon />}
          {guest.mealPreference === "vegetariano" && <VegetableIcon />}
          {guest.mealPreference === "indiferente" && <MeatAndVegetableIcon />}
          <HStack>
            {guestsArray.map((_, index) => {
              return <HumanIcon size={40} key={index} />;
            })}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

function SearchInput() {
  return (
    <Box w="100%">
      <Input
        placeholder="Buscar"
        size="md"
        borderRadius="10px"
        bg={"white"}
        border="none"
        boxShadow={`sm`}
      />
    </Box>
  );
}

function FilterBadges({
  filterAll,
  filterAttending,
  filterNotAttending,
}: {
  filterAll: () => void;
  filterAttending: () => void;
  filterNotAttending: () => void;
}) {
  return (
    <>
      <VStack align={"flex-start"}>
        <Text fontSize="14px" mb=".5rem">
          Filtrar por:
        </Text>
        <Flex direction="row" gap=".5rem" mb="1.5rem">
          <Badge onClick={filterAll}>Todos</Badge>
          <Badge onClick={filterAttending} bg={"green.200"}>
            Partecipantes
          </Badge>
          <Badge onClick={filterNotAttending} bg={"red.200"}>
            Ausentes
          </Badge>
        </Flex>
      </VStack>
    </>
  );
}
