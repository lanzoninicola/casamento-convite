import { Center, VStack, Text } from "@chakra-ui/react";

export default function Pegadinha() {
  return (
    <Center>
      <VStack spacing=".5rem" w="65vw">
        <Text
          fontSize="16px"
          lineHeight="1.3"
          textAlign="justify"
          fontStyle="italic"
          fontWeight={700}
        >
          "Nossa casa está prontiha
          <br />
          Já não cabe mais nadinha <br /> Mas a gente não é louco <br />
          De recusar uma ajudinha <br />
          Afinal quem é que nunca
          <br /> Precisou de uma graninha?"
        </Text>
      </VStack>
    </Center>
  );
}
