import { Box, Center, Flex, Image } from "@chakra-ui/react";
import useHistoryContext from "~/context/hooks/useHistoryContext";
import useChapters from "./hooks/useChapters";

export default function NextChapterButton() {
  const historyCtx = useHistoryContext();
  const { chaptersQuantity } = useChapters();

  const {
    isReadingStories,
    chapter,
    fragment,
    hasRead,
    setHasRead,
    setIsReadingStories,
    setChapter,
    setFragment,
  } = historyCtx;

  console.table({
    isReadingStories,
    chapter,
    fragment,
    hasRead,
    chaptersQuantity,
  });

  function handleClick() {
    if (!historyCtx) {
      return;
    }

    if (!isReadingStories) {
      startReading();
      nextChapter();
    }

    if (isReadingStories && chapter >= 0 && fragment === "intro") {
      readingContent();
    }

    if (isReadingStories && chapter >= 0 && fragment === "content") {
      nextChapter();
    }

    if (
      isReadingStories &&
      fragment === "content" &&
      chapter >= chaptersQuantity - 1
    ) {
      endReading();
    }
  }

  function startReading() {
    setIsReadingStories(true);
  }

  function readingContent() {
    setFragment("content");
  }

  function nextChapter() {
    setChapter(chapter + 1);
    setFragment("intro");
  }

  function endReading() {
    setIsReadingStories(false);
    setHasRead(true);
    setChapter(-1);
    setFragment("intro");
  }

  return (
    <Flex w="100%" justify="flex-end" onClick={handleClick}>
      <Box w="40px" h="40px" backgroundColor="primary.500" borderRadius="5px">
        <Center h="100%">
          <Image src="/images/arrow-right.svg" />
        </Center>
      </Box>
    </Flex>
  );
}
