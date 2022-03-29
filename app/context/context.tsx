import { useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryContextData {
  isReadingStories: boolean;
  chapter: number;
  fragment: ChapterFragment;

  setIsReadingStories: (isReadingStories: boolean) => void;
  setChapter: (chapter: number) => void;
  setFragment: (fragment: ChapterFragment) => void;
}

export type ChapterFragment = "intro" | "content";

export const HistoryContext = createContext<HistoryContextData>(
  {} as HistoryContextData
);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [isReadingStories, setIsReadingStories] = useState(false);
  const [chapter, setChapter] = useState(-1);
  const [fragment, setFragment] = useState<ChapterFragment>("intro");

  return (
    <HistoryContext.Provider
      value={{
        isReadingStories,
        chapter,
        fragment,

        setIsReadingStories,
        setChapter,
        setFragment,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
