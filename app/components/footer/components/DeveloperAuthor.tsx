import { Center, VStack, HStack } from "@chakra-ui/react";
import { HeartIcon } from "~/components/shared/Icons";
import FooterText from "./FooterText";

export default function DeveloperAuthor() {
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
