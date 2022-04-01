import { Box, Flex, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import BaseHeading from "~/components/shared/BaseHeadings";
import { TextDecorated } from "~/components/shared/TextDecorated";
import TopBackgroundPattern from "~/components/shared/TopBackgroundPattern";

import HistoryCardWrapper from "./components/HistoryCardWrapper";
import useStoryIntro from "./hooks/useStoryIntro";

export default function HistoryChapterIntro() {
  const { textMonth, textYear, title } = useStoryIntro();

  return (
    <>
      <HistoryCardWrapper>
        <TopBackgroundPattern />
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="4rem"
          h="100vh"
        >
          <TextDecorated>Nossa Historia</TextDecorated>
          <Box>
            <Text
              color="text.500"
              fontSize="38px"
              letterSpacing="0.145em"
              lineHeight="1"
              textAlign="center"
            >
              {textMonth}
            </Text>
            <Text
              color="text.500"
              fontSize="60px"
              letterSpacing="-0.04em"
              lineHeight="1"
              textAlign="center"
            >
              {textYear}
            </Text>
          </Box>
          <BaseHeading as="h3" textAlign="center" fontWeight="700">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(title).start();
              }}
              options={{
                delay: 90,
              }}
            />
          </BaseHeading>
        </Flex>
      </HistoryCardWrapper>
    </>
  );
}
