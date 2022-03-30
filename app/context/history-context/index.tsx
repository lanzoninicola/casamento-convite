import { useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryContextData {
  isReadingStories: boolean;
  chapter: number;
  fragment: ChapterFragment;
  hasRead: boolean;
  setIsReadingStories: (isReadingStories: boolean) => void;
  setChapter: (chapter: number) => void;
  setFragment: (fragment: ChapterFragment) => void;
  setHasRead: (hasRead: boolean) => void;
}

export type ChapterFragment = "cover" | "intro" | "content";

export const HistoryContext = createContext<HistoryContextData>(
  {} as HistoryContextData
);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [isReadingStories, setIsReadingStories] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [fragment, setFragment] = useState<ChapterFragment>("cover");
  const [hasRead, setHasRead] = useState(false);

  return (
    <HistoryContext.Provider
      value={{
        isReadingStories,
        chapter,
        fragment,
        hasRead,
        setIsReadingStories,
        setChapter,
        setFragment,
        setHasRead,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
