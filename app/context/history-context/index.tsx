import { useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryContextData {
  isReadingStories: boolean;
  currentChapter: number;
  fragment: ChapterFragment;
  hasRead: boolean;
  isHistorySkipped: boolean;
  isAlertHistorySkippedOpen: boolean;
  setIsReadingStories: (isReadingStories: boolean) => void;
  setCurrentChapter: (currentChapter: number) => void;
  setFragment: (fragment: ChapterFragment) => void;
  setHasRead: (hasRead: boolean) => void;
  setIsHistorySkipped: (isHistorySkipped: boolean) => void;
  setIsAlertHistorySkippedOpen: (isAlertHistorySkippedOpen: boolean) => void;
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
  const [isHistorySkipped, setIsHistorySkipped] = useState(false);
  const [isAlertHistorySkippedOpen, setIsAlertHistorySkippedOpen] =
    useState(false);

  return (
    <HistoryContext.Provider
      value={{
        isReadingStories,
        currentChapter,
        fragment,
        hasRead,
        isHistorySkipped,
        isAlertHistorySkippedOpen,
        setIsReadingStories,
        setCurrentChapter,
        setFragment,
        setHasRead,
        setIsHistorySkipped,
        setIsAlertHistorySkippedOpen,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
