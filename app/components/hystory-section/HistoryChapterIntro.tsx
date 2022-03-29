import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { HistoryContext } from "~/context/context";

import BaseHeading from "../shared/Headings";
import { HeadingWithLineDecoration } from "../shared/HeadingWithLineDecoration";
import NextChapterButton from "./NextChapterButton";

export default function HistoryChapterIntro() {
  const currentHistory = useContext(HistoryContext);

  console.log(currentHistory);

  return (
    <>
      <Box id="chapter-intro">
        <Center h="90vh">
          <Flex
            direction="column"
            justify="center"
            align="center"
            gap="4rem"
            h="100%"
          >
            <HeadingWithLineDecoration>
              Nossa historia
            </HeadingWithLineDecoration>
            <Box>
              <Text
                color="text.500"
                fontSize="38px"
                letterSpacing="0.145em"
                lineHeight="1"
                textAlign="center"
              >
                blalbla
              </Text>
              <Text
                color="text.500"
                fontSize="60px"
                letterSpacing="-0.04em"
                lineHeight="1"
                textAlign="center"
              >
                blalbla
              </Text>
            </Box>
            <BaseHeading as="h3" textAlign="center">
              blalbla
            </BaseHeading>
          </Flex>
        </Center>
        <NextChapterButton />
      </Box>
    </>
  );
}
