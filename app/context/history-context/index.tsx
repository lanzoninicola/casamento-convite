import { useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryContextData {
  isReadingStories: boolean;
  currentChapter: number;
  fragment: ChapterFragment;
  hasRead: boolean;
  setIsReadingStories: (isReadingStories: boolean) => void;
  setCurrentChapter: (currentChapter: number) => void;
  setFragment: (fragment: ChapterFragment) => void;
  setHasRead: (hasRead: boolean) => void;
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

  return (
    <HistoryContext.Provider
      value={{
        isReadingStories,
        currentChapter,
        fragment,
        hasRead,
        setIsReadingStories,
        setCurrentChapter,
        setFragment,
        setHasRead,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
