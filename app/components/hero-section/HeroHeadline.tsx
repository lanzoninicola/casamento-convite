import { Flex, Heading, Text } from "@chakra-ui/react";
import BaseHeading from "../shared/Headings";

export default function HeroHeadline() {
  return (
    <>
      <Flex id="hero-headline" w="100%" direction="column" justify="center">
        <BaseHeading
          as="h1"
          fontSize="80px"
          letterSpacing="-0.05em"
          textAlign="center"
        >
          È hora!
        </BaseHeading>

        <Text
          color="text.500"
          fontSize="20px"
          letterSpacing="0.125em"
          lineHeight="1"
          textAlign="center"
        >
          21.04.22
        </Text>
      </Flex>
    </>
  );
}
