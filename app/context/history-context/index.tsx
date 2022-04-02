import { localStorageManager } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import useAlertHistorySkipped, {
  HistorySkyppedStatus,
} from "~/components/index-page/hystory-section/hooks/useAlertHistorySkipped";
import useLocalStorage from "~/components/shared/hooks/useLocalStorage.no.SSR";

export const HISTORY_SKIPPED_STATUS_KEY = "alertHistorySkipped";

export interface HistoryContextData {
  isReadingStories: boolean;
  currentChapter: number;
  fragment: ChapterFragment;
  hasRead: boolean;
  status: HistorySkyppedStatus;
  setIsReadingStories: (isReadingStories: boolean) => void;
  setCurrentChapter: (currentChapter: number) => void;
  setFragment: (fragment: ChapterFragment) => void;
  setHasRead: (hasRead: boolean) => void;
  setStatus: (statusAlertHistorySkipped: HistorySkyppedStatus) => void;
}

export type ChapterFragment = "cover" | "intro" | "content";

export const HistoryContext = createContext<HistoryContextData>(
  {} as HistoryContextData
);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [isReadingStories, setIsReadingStories] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [fragment, setFragment] = useState<ChapterFragment>("cover");
  const [hasRead, setHasRead] = useState(false);
  // const [status, setStatus] = useState(HistorySkyppedStatus.hidden);
  const [status, setStatus] = useLocalStorage(
    HISTORY_SKIPPED_STATUS_KEY,
    HistorySkyppedStatus.hidden
  );

  return (
    <HistoryContext.Provider
      value={{
        isReadingStories,
        currentChapter,
        fragment,
        hasRead,
        status,
        setIsReadingStories,
        setCurrentChapter,
        setFragment,
        setHasRead,
        setStatus,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
