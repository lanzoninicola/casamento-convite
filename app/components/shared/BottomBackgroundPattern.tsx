import { Center, Flex, Image } from "@chakra-ui/react";

export default function BottomBackgroundPattern() {
  return (
    <Flex
      w="100%"
      h="100%"
      align="flex-end"
      justify="center"
      position="absolute"
      top="0"
      left="0"
      zIndex="-1"
    >
      <Center>
        <Image src="/images/bottom-bg-pattern.svg" />
      </Center>
    </Flex>
  );
}
