import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";

export default function Envelope() {
  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      h="100%"
      w="100%"
      zIndex={1}
    >
      <VStack spacing="3rem">
        <Box w="150px" h="150px">
          <Image src="/images/gift-envelope-icon.svg" alt="Gift" />
        </Box>
        <Center>
          <Text fontSize="18px" lineHeight="1.2" textAlign="center">
            No dia da festa, haverá <br />
            uma urna onde você <br /> poderá depositar seu <br />
            envelope.
          </Text>
        </Center>
      </VStack>
    </Flex>
  );
}
