import { Center, Flex, Image } from "@chakra-ui/react";

export default function TopBackgroundPattern() {
  return (
    <Flex
      w="100%"
      h="100%"
      align="flex-start"
      justify="center"
      position="absolute"
      top="0"
      left="0"
    >
      <Image src="/images/top-bg-pattern.svg" w="100vw" />
    </Flex>
  );
}
