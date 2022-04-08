import { VStack, Flex, Badge, Text } from "@chakra-ui/react";

export default function FilterGenderBadges({
  filterAll,
  filterBoy,
  filterGirl,
}: {
  filterAll: () => void;
  filterBoy: () => void;
  filterGirl: () => void;
}) {
  return (
    <>
      <VStack align={"flex-start"}>
        <Text fontSize="14px" letterSpacing={"-.1px"}>
          Filtrar por:
        </Text>
        <Flex direction="row" gap=".5rem" mb="1.5rem">
          <Badge onClick={filterAll}>Todos</Badge>
          <Badge onClick={filterBoy} bg={"green.200"}>
            Menino
          </Badge>
          <Badge onClick={filterGirl} bg={"blue.200"}>
            Menina
          </Badge>
        </Flex>
      </VStack>
    </>
  );
}
