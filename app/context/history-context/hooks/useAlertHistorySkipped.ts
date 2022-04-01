import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "..";

export default function useAlertHistorySkipped() {
  const isAlertHistorySkippedOpen = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.isAlertHistorySkippedOpen
  );
  const setIsAlertHistorySkippedOpen = useContextSelector(
    HistoryContext,
    (ctx) => ctx?.setIsAlertHistorySkippedOpen
  );

  return {
    isAlertHistorySkippedOpen,
    setIsAlertHistorySkippedOpen,
  };
}
