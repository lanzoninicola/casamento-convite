import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Section from "~/components/shared/Section";

export default function Gift() {
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
        <VStack>
          <Text fontSize="14px">QR CODE</Text>
          <Box w="150px" h="150px">
            <Image src="/images/pix-qrcode.jpeg" alt="Gift" />
          </Box>
        </VStack>
        <VStack>
          <Text fontSize="14px">CHAVE / CPF</Text>
          <Box
            paddingBlock="0.5rem"
            paddingInline="2rem"
            border="2px solid"
            borderColor="secondary.500"
            borderRadius="20px"
          >
            <Text fontSize="16px" fontWeight={700}>
              052.500.159-05
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Flex>
  );
}
