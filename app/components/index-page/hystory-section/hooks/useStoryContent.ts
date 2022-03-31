import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/history-context";
import { ChapterContent } from "../chapters";

import useChapters from "./useChapters";

export default function useStoryContent(): ChapterContent {
  const { chapters } = useChapters();
  const currentChapter = useContextSelector(
    HistoryContext,
    (ctx) => ctx.currentChapter
  );
  const chapterType = chapters[currentChapter].type;

  if (chapterType === "content") {
    const content = chapters[currentChapter] as ChapterContent;

    if (content) {
      const { title, text, image } = content;

      return {
        type: chapterType,
        title,
        text,
        image,
      };
    }
  }

  return {
    type: "content",
    title: "",
    text: "",
    image: "",
  };
}
