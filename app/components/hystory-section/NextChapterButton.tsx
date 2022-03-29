import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import useHistoryContext from "~/context/hooks/useHistoryContext";
import useChapters from "./hooks/useChapters";

export default function NextChapterButton() {
  const historyCtx = useHistoryContext();
  const { chaptersQuantity } = useChapters();

  const {
    isReadingStories,
    chapter,
    fragment,

    setIsReadingStories,
    setChapter,
    setFragment,
  } = historyCtx;

  console.table({
    isReadingStories,
    chapter,
    fragment,
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

    setChapter(-1);
    setFragment("intro");
  }

  return (
    <Flex w="100%" justify="flex-end" onClick={handleClick} pb="4rem">
      <Box
        w="max-content"
        h="40px"
        backgroundColor="primary.500"
        borderRadius="5px"
        pl="1rem"
        pr="1rem"
      >
        <Center h="100%" gap="1rem">
          <Text fontSize="16px" textTransform="uppercase">
            CLIQUE AQUI
          </Text>
          <Image src="/images/arrow-right.svg" />
        </Center>
      </Box>
    </Flex>
  );
}
