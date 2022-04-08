import { VStack, Flex, Badge, Text } from "@chakra-ui/react";

export default function FilterPartecipationBadges({
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
        <Text fontSize="14px" letterSpacing={"-.1px"}>
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
