import { Center, Flex, Image } from "@chakra-ui/react";

export default function HeroBackgroundPattern() {
  return (
    <Flex
      id="hero-bg-wrapper"
      w="100%"
      h="100%"
      align="flex-start"
      justify="center"
      position="absolute"
      top="0"
      left="0"
    >
      <Center>
        <Image
          src="/images/hero-bg-pattern.svg"
          alt="Hero background"
          w="100vw"
          h="100vh"
        />
      </Center>
    </Flex>
  );
}
