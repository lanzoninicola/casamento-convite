import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import FilterGiftBadges from "~/components/dashboard/components/FilterGiftBadges";
import SearchInput from "~/components/dashboard/components/SearchInput";
import Toolbar from "~/components/dashboard/components/Toolbar";
import ToolbarButton from "~/components/dashboard/components/ToolbarButton";
import BaseHeading from "~/components/shared/BaseHeadings";
import {
  EnvelopeIcon,
  FilterIcon,
  PixIcon,
  SearchIcon,
} from "~/components/shared/Icons";
import { firestoreService } from "~/lib/firebase/db.server";
import GiftModel from "~/modules/gifts/models/gift.model";
import GiftDatabaseService from "~/modules/gifts/services/gift-database.service";

export interface LoaderData {
  gifts: GiftModel[];
}

// <meta name="robots" content="noindex,nofollow">
export const meta: MetaFunction = () => {
  return {
    robots: "noindex,nofollow",
  };
};

export const loader: LoaderFunction = async () => {
  const giftService = new GiftDatabaseService(firestoreService);
  const giftResponse = await giftService.getAll();

  let gifts: GiftModel[] = [];

  if (giftResponse.ok && giftResponse.payload) {
    gifts = giftResponse.payload;
  }

  return {
    gifts,
  };
};

export default function InvitationPage() {
  const { gifts }: LoaderData = useLoaderData();
  const [filteredGiftResponses, setFilteredGiftResponses] =
    React.useState(gifts);
  const [showFilterOptions, setShowFilterOption] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  function filterAll() {
    setFilteredGiftResponses(gifts);
  }

  function filterPix() {
    setFilteredGiftResponses(gifts.filter((gift) => gift.type === "pix"));
  }

  function filterEnvelope() {
    setFilteredGiftResponses(gifts.filter((gift) => gift.type === "envelope"));
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
    const nextGifts = gifts.filter((gift) => {
      if (gift.guestName) {
        if (gift.guestName.toLowerCase().includes(term.toLowerCase())) {
          return gift;
        }
      }
    });

    setFilteredGiftResponses(nextGifts);
  }

  return (
    <>
      <BaseHeading mb="1rem" fontSize="22px">
        Lista de preferençia de presentes
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
            <FilterGiftBadges
              filterAll={filterAll}
              filterPix={filterPix}
              filterEnvelope={filterEnvelope}
            />
          )}
          {showSearch && (
            <SearchInput onSearch={(term) => onSearchRecord(term)} />
          )}
        </VStack>
        <ListOfGiftResponses records={filteredGiftResponses} />
      </VStack>
    </>
  );
}

function ListOfGiftResponses({ records }: { records: GiftModel[] }) {
  return (
    <Flex
      className="gift-list"
      direction="column"
      gap=".75rem"
      width={"100%"}
      justify="space-between"
    >
      {records.map((record, index) => (
        <GiftRow key={index} record={record} />
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
function GiftRow({ record }: { record: GiftModel }) {
  return (
    <Box
      borderRadius={"10px"}
      boxShadow="sm"
      paddingBlock=".75rem"
      paddingInline={".5rem"}
      bg="white"
      w="100%"
    >
      <Grid gridTemplateColumns={"1fr .25fr"} gap="1rem">
        <HStack w="100%">
          <Text fontSize="14px" fontWeight={700} letterSpacing={"-.5px"}>
            Nome:
          </Text>
          <Text fontSize="16px" letterSpacing={"-.5px"}>
            {record.guestName}
          </Text>
        </HStack>

        <HStack spacing={4} w="100%" justify={"flex-end"}>
          {record.type === "pix" && <PixIcon />}
          {record.type === "envelope" && <EnvelopeIcon />}
        </HStack>
      </Grid>
    </Box>
  );
}
