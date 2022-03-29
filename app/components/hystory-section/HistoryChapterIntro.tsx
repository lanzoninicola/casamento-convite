import { Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";

import BaseHeading from "../shared/Headings";
import { HeadingWithLineDecoration } from "../shared/HeadingWithLineDecoration";
import HistoryCardWrapper from "./HistoryCardWrapper";
import useStoryIntro from "./hooks/useStoryIntro";

export default function HistoryChapterIntro() {
  const { textMonth, textYear, title } = useStoryIntro();

  return (
    <>
      <HistoryCardWrapper>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="4rem"
          h="100%"
        >
          <HeadingWithLineDecoration>Nossa historia</HeadingWithLineDecoration>
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
          <BaseHeading as="h3" textAlign="center">
            {title}
          </BaseHeading>
        </Flex>
      </HistoryCardWrapper>
    </>
  );
}
