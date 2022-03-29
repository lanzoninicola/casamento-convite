import { useContextSelector } from "use-context-selector";
import { HistoryContext, HistoryContextData } from "../context";

export default function useHistoryContext(): HistoryContextData {
  const isReadingStories = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.isReadingStories
  );
  const setIsReadingStories = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setIsReadingStories
  );
  const chapter = useContextSelector(HistoryContext, (ctx) => ctx?.chapter);
  const setChapter = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setChapter
  );
  const fragment = useContextSelector(HistoryContext, (ctx) => ctx?.fragment);
  const setFragment = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setFragment
  );

  return {
    isReadingStories,
    setIsReadingStories,
    chapter,
    setChapter,
    fragment,
    setFragment,
  };
}
