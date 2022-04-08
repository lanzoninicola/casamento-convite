import { VStack, Flex, Badge, Text } from "@chakra-ui/react";

export default function FilterGiftBadges({
  filterAll,
  filterPix,
  filterEnvelope,
}: {
  filterAll: () => void;
  filterPix: () => void;
  filterEnvelope: () => void;
}) {
  return (
    <>
      <VStack align={"flex-start"}>
        <Text fontSize="14px" letterSpacing={"-.1px"}>
          Filtrar por:
        </Text>
        <Flex direction="row" gap=".5rem" mb="1.5rem">
          <Badge onClick={filterAll}>Todos</Badge>
          <Badge onClick={filterPix} bg={"green.200"}>
            PIX
          </Badge>
          <Badge onClick={filterEnvelope} bg={"blue.200"}>
            Envelope
          </Badge>
        </Flex>
      </VStack>
    </>
  );
}
