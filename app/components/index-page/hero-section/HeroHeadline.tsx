import { Flex, Heading, Text } from "@chakra-ui/react";
import settings from "~/modules/settings";
import BaseHeading from "../../shared/BaseHeadings";

export default function HeroHeadline() {
  return (
    <>
      <Flex id="hero-headline" w="100%" direction="column" justify="center">
        <BaseHeading
          as="h1"
          fontSize="80px"
          letterSpacing="-0.05em"
          textAlign="center"
          fontWeight="700"
        >
          È hora!
        </BaseHeading>

        <Text
          color="text.500"
          fontSize="18px"
          letterSpacing="0.125em"
          lineHeight="1"
          textAlign="center"
          fontWeight="700"
        >
          {settings.eventDateHumanReadable}
        </Text>
      </Flex>
    </>
  );
}
