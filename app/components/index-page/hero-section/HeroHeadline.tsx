import { Flex, Heading, Text } from "@chakra-ui/react";
import settings from "~/modules/settings";
import BaseHeading from "../../shared/BaseHeadings";
import HeroEllipseLayer from "./HeroEllipseLayer";

export default function HeroHeadline() {
  return (
    <>
      <Flex id="hero-headline" w="100%" direction="column" justify="center">
        <BaseHeading
          as="h1"
          fontSize="clamp(3rem, -10.8462rem + 61.5385vw, 5rem)"
          letterSpacing="-0.05em"
          textAlign="center"
          fontWeight="400"
          mb={0}
        >
          É hora!
        </BaseHeading>

        <Text
          color="text.500"
          fontSize="16px"
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
