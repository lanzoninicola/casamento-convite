import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "..";

export default function useChapterContext() {
  const currentChapter = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.currentChapter
  );
  const setCurrentChapter = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setCurrentChapter
  );

  return {
    currentChapter,
    setCurrentChapter,
  };
}
