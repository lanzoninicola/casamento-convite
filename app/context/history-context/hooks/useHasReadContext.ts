import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "..";

export default function useHasReadContext() {
  const hasRead = useContextSelector(HistoryContext, (ctx) => ctx?.hasRead);
  const setHasRead = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setHasRead
  );

  return {
    hasRead,
    setHasRead,
  };
}
