import { Center, Flex, Image } from "@chakra-ui/react";
import useViewportInfo from "~/components/shared/hooks/UseViewPortInfo";

export default function HeroImage() {
  return (
    <Flex
      w="100%"
      h="100%"
      align="flex-end"
      justify="center"
      position="absolute"
      top="0"
      left="0"
    >
      <Center>
        <Image src="/images/hero-bg.png" alt="Hero background" h="70vh" />
      </Center>
    </Flex>
  );
}
