import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useAlertHistorySkippedContext from "~/context/history-context/hooks/useAlertHistorySkippedContext";

export enum HistorySkyppedStatus {
  visible = "visible",
  hidden = "hidden",
  closed = "closed",
}

export default function useAlertHistorySkipped() {
  const { status, setStatus, hasRead } = useAlertHistorySkippedContext();

  const { ref: targetRef, inView: targetInView } = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  useEffect(() => {
    if (status !== HistorySkyppedStatus.closed) {
      if (targetInView && !hasRead) {
        setStatus(HistorySkyppedStatus.visible);
      }
    }
  }, [targetInView, hasRead]);

  return {
    status,
    setStatus,
    targetRef,
    targetInView,
  };
}
