import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import FilterGenderBadges from "~/components/dashboard/components/FilterGenderBadges";
import SearchInput from "~/components/dashboard/components/SearchInput";
import Toolbar from "~/components/dashboard/components/Toolbar";
import ToolbarButton from "~/components/dashboard/components/ToolbarButton";
import BaseHeading from "~/components/shared/BaseHeadings";
import {
  BoyIcon,
  FilterIcon,
  GirlIcon,
  SearchIcon,
} from "~/components/shared/Icons";
import { firestoreService } from "~/lib/firebase/db.server";
import { RevelationModel } from "~/modules/revelation-game/model/revelation.model";
import RevelationDatabaseService from "~/modules/revelation-game/services/revelation-database.service";

export interface LoaderData {
  revelations: RevelationModel[];
}

// <meta name="robots" content="noindex,nofollow">
export const meta: MetaFunction = () => {
  return {
    robots: "noindex,nofollow",
  };
};

export const loader: LoaderFunction = async () => {
  const revelationService = new RevelationDatabaseService(firestoreService);
  const revelationResponse = await revelationService.getAll();

  let revelations: RevelationModel[] = [];

  if (revelationResponse.ok && revelationResponse.payload) {
    revelations = revelationResponse.payload;
  }

  return {
    revelations,
  };
};

export default function RevelationPage() {
  const { revelations }: LoaderData = useLoaderData();
  const [filteredRevelationResponses, setFilteredRevelationResponses] =
    React.useState(revelations);
  const [showFilterOptions, setShowFilterOption] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  function filterAll() {
    setFilteredRevelationResponses(revelations);
  }

  function filterBoy() {
    setFilteredRevelationResponses(
      revelations.filter((revelation) => revelation.babySex === "boy")
    );
  }

  function filterGirl() {
    setFilteredRevelationResponses(
      revelations.filter((revelation) => revelation.babySex === "girl")
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
    const nextGifts = revelations.filter((revelation) => {
      if (revelation.name) {
        if (revelation.name.toLowerCase().includes(term.toLowerCase())) {
          return revelation;
        }
      }
    });

    setFilteredRevelationResponses(nextGifts);
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
            <FilterGenderBadges
              filterAll={filterAll}
              filterBoy={filterBoy}
              filterGirl={filterGirl}
            />
          )}
          {showSearch && (
            <SearchInput onSearch={(term) => onSearchRecord(term)} />
          )}
        </VStack>
        <ListOfGiftResponses records={filteredRevelationResponses} />
      </VStack>
    </>
  );
}

function ListOfGiftResponses({ records }: { records: RevelationModel[] }) {
  return (
    <Flex
      className="revelation-list"
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
 *  name: string;
  willAttend: boolean;
  guests?: number;
  mealPreference?: string;
 */
function GiftRow({ record }: { record: RevelationModel }) {
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
            {record.name}
          </Text>
        </HStack>

        <HStack spacing={4} w="100%" justify={"flex-end"}>
          {record.babySex === "boy" && <BoyIcon size={40} />}
          {record.babySex === "girl" && <GirlIcon size={40} />}
        </HStack>
      </Grid>
    </Box>
  );
}
