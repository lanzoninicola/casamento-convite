import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { HeartIcon } from "../shared/Icons";

export default function Footer() {
  const [clickCounter, setClickCounter] = useState<number>(0);

  return (
    <Center bg="secondary.500" paddingBlock="1rem">
      <VStack spacing={0}>
        <HStack>
          <FooterText>Made with</FooterText>
          <HeartIcon />
          <FooterText>by Nicola Lanzoni</FooterText>
        </HStack>

        <FooterText>lanzoni.nicola@gmail.com</FooterText>
      </VStack>
    </Center>
  );
}

function FooterText({ children }: { children: React.ReactNode }) {
  return (
    <Text
      as="span"
      fontSize="14px"
      color="text.500"
      letterSpacing="-1px"
      fontWeight={700}
    >
      {children}
    </Text>
  );
}
