import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "..";

export default function useSkipHistory() {
  const isHistorySkipped = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.isHistorySkipped
  );
  const setIsHistorySkipped = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setIsHistorySkipped
  );

  return {
    isHistorySkipped,
    setIsHistorySkipped,
  };
}
