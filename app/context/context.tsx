import { useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryContextData {
  showIntro: boolean;
  chapter: number;
  fragment: ChapterFragment;
  hasRead: boolean;
  setShowIntro: (showIntro: boolean) => void;
  setChapter: (chapter: number) => void;
  setFragment: (fragment: ChapterFragment) => void;
  setHasRead: (hasRead: boolean) => void;
}

export type ChapterFragment = "intro" | "content";

export const HistoryContext = createContext<HistoryContextData | null>(null);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [chapter, setChapter] = useState(0);
  const [fragment, setFragment] = useState<ChapterFragment>("intro");
  const [hasRead, setHasRead] = useState(false);

  return (
    <HistoryContext.Provider
      value={{
        showIntro,
        chapter,
        fragment,
        hasRead,
        setShowIntro,
        setChapter,
        setFragment,
        setHasRead,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
