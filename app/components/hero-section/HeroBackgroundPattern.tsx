import { Center, Flex, Image } from "@chakra-ui/react";

export default function HeroBackgroundPattern() {
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
      <Center>
        <Image src="/images/hero-bg-pattern.svg" alt="Hero background" />
      </Center>
    </Flex>
  );
}
