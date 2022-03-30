import { Flex, Box, Text, Center, Stack, HStack } from "@chakra-ui/react";
import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/history-context";

import useHistoryContext from "~/context/history-context/hooks/useHistoryContext";

import BottomBackgroundPattern from "../shared/BottomBackgroundPattern";
import HorizontalScroll from "../shared/HorizontalScroll";
import Section from "../shared/Section";
import HistoryChapterContent from "./HistoryChapterContent";
import HistoryChapterIntro from "./HistoryChapterIntro";
import HistoryIntro from "./HistoryIntro";
import useChapters from "./hooks/useChapters";
import NextChapterButton from "./NextChapterButton";
import PrevChapterButton from "./PrevChapterButton";

export default function HistorySection() {
  const { chapters } = useChapters();
  const chapterIdx = useContextSelector(HistoryContext, (ctx) => ctx.chapter);

  const fragment = chapters[chapterIdx].type;

  return (
    <>
      <Section>
        {fragment === "cover" && <HistoryIntro />}
        {fragment === "intro" && <HistoryChapterIntro />}
        {fragment === "content" && <HistoryChapterContent />}
        <Box position="absolute" bottom="4rem" zIndex={999}>
          <Flex direction="row" justify="center" gap="1rem" mb="3rem">
            {chapterIdx > 0 && <PrevChapterButton />}
            <NextChapterButton />
          </Flex>
          <ChaptersBullets />
        </Box>
      </Section>
    </>
  );
}

function ChaptersBullets() {
  const { chapters } = useChapters();

  return (
    <Flex gap=".5rem" align="center" justify="center" width="100vw">
      {chapters.map((_, index) => {
        return <Bullet key={index} index={index} />;
      })}
    </Flex>
  );
}

function Bullet({ index, ...props }: { index: number; [x: string]: any }) {
  const chapter = useContextSelector(HistoryContext, (ctx) => ctx.chapter);
  const setChapter = useContextSelector(
    HistoryContext,
    (ctx) => ctx.setChapter
  );

  function onChapterSelection() {
    console.log(index);
    setChapter(index);
  }

  return (
    <Box
      w={chapter !== index ? "14px" : "24px"}
      h={chapter !== index ? "14px" : "24px"}
      borderRadius="100%"
      bg="primary.500"
      {...props}
      onClick={onChapterSelection}
      transition="all .1s ease-in-out"
    >
      <Center h="100%">
        <Text
          as="span"
          fontSize={chapter !== index ? "8px" : "14px"}
          fontWeight="600"
        >
          {index}
        </Text>
      </Center>
    </Box>
  );
}
