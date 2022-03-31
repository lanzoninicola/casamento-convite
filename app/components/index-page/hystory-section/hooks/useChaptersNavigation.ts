import useChapterContext from "~/context/history-context/hooks/useChapterContext";
import useHasReadContext from "~/context/history-context/hooks/useHasReadContext";
import useChapters from "./useChapters";

export default function useChaptersNavigation() {
  const { currentChapter, setCurrentChapter } = useChapterContext();
  const { setHasRead } = useHasReadContext();
  const { chaptersLength } = useChapters();

  function nextChapter() {
    const nextChapter = currentChapter + 1;

    if (nextChapter > chaptersLength - 1) {
      setCurrentChapter(0);
      setHasRead(true);
      return;
    }

    setCurrentChapter(nextChapter);
  }

  function readAgainChapters() {
    setHasRead(false);
    nextChapter();
  }

  function prevChapter() {
    const prevChapter = currentChapter - 1;

    setCurrentChapter(prevChapter);
  }

  return {
    nextChapter,
    prevChapter,
    readAgainChapters,
  };
}
