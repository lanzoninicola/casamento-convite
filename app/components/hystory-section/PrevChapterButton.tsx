import { Image } from "@chakra-ui/react";
import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";
import useHistoryContext from "~/context/hooks/useHistoryContext";

import BaseChapterButton from "./BaseChapterButton";

export default function PrevChapterButton() {
  const historyCtx = useHistoryContext();

  const chapter = useContextSelector(HistoryContext, (ctx) => ctx.chapter);
  const setChapter = useContextSelector(
    HistoryContext,
    (ctx) => ctx.setChapter
  );

  function handleClick() {
    if (!historyCtx) {
      return;
    }

    prevChapter();
  }

  function prevChapter() {
    const prevChapter = chapter - 1;

    setChapter(prevChapter);
  }

  return (
    <BaseChapterButton onClick={handleClick}>
      <Image src="/images/arrow-left.svg" />
    </BaseChapterButton>
  );
}
