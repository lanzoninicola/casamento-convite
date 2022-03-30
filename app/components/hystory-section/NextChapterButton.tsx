import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import useHistoryContext from "~/context/hooks/useHistoryContext";
import BaseChapterButton from "./BaseChapterButton";
import useChapters from "./hooks/useChapters";

export default function NextChapterButton() {
  const historyCtx = useHistoryContext();
  const { chaptersQuantity } = useChapters();

  const { chapter, setChapter } = historyCtx;

  function handleClick() {
    if (!historyCtx) {
      return;
    }

    nextChapter();
  }

  function nextChapter() {
    const nextChapter = chapter + 1;

    if (nextChapter > chaptersQuantity - 1) {
      setChapter(0);
      return;
    }

    setChapter(nextChapter);
  }

  return (
    <BaseChapterButton onClick={handleClick}>
      <Image src="/images/arrow-right.svg" />
    </BaseChapterButton>
  );
}
