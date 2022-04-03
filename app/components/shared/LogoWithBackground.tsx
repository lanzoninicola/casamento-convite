import { Center, Image, Text } from "@chakra-ui/react";

export default function LogoWithBackground() {
  return (
    <Center flexDirection="column" gap=".5rem">
      <Image src={`/images/thank-you.png`} w="80px" />
      <Text
        fontSize="14px"
        textTransform="uppercase"
        letterSpacing="2px"
        fontWeight="700"
      >
        Gustavo & Kelly
      </Text>
    </Center>
  );
}
