import { useContextSelector } from "use-context-selector";
import { HistoryContext, HistoryContextData } from "..";

export default function useHistoryContext(): HistoryContextData {
  const isReadingStories = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.isReadingStories
  );
  const setIsReadingStories = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setIsReadingStories
  );
  const currentChapter = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.currentChapter
  );
  const setCurrentChapter = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setCurrentChapter
  );
  const fragment = useContextSelector(HistoryContext, (ctx) => ctx?.fragment);
  const setFragment = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setFragment
  );

  const hasRead = useContextSelector(HistoryContext, (ctx) => ctx?.hasRead);
  const setHasRead = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setHasRead
  );

  return {
    isReadingStories,
    setIsReadingStories,
    currentChapter,
    setCurrentChapter,
    fragment,
    setFragment,
    hasRead,
    setHasRead,
  };
}
