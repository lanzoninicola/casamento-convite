import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";

import { ChapterContent } from "../chapters";
import useChapters from "./useChapters";

export default function useStoryContent(): ChapterContent {
  const { chapters } = useChapters();
  const chapterIdx = useContextSelector(HistoryContext, (ctx) => ctx.chapter);
  const chapterType = chapters[chapterIdx].type;

  if (chapterType === "content") {
    const content = chapters[chapterIdx] as ChapterContent;

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
