import useChapterContext from "~/context/history-context/hooks/useChapterContext";
import useChapters from "./useChapters";

export default function useChapterFragment() {
  const { chapters } = useChapters();
  const { currentChapter } = useChapterContext();

  return chapters[currentChapter].type;
}
