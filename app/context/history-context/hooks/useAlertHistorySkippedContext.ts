import { useContextSelector } from "use-context-selector";

import { HistoryContext } from "..";

export default function useAlertHistorySkippedContext() {
  const hasRead = useContextSelector(HistoryContext, (state) => state.hasRead);
  const status = useContextSelector(HistoryContext, (ctx) => ctx?.status);
  const setStatus = useContextSelector(HistoryContext, (ctx) => ctx?.setStatus);

  return {
    status,
    setStatus,
    hasRead,
  };
}
