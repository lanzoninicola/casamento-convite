import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";

import { chapters, ChapterContent } from "../chapters";

export default function useStoryContent(): ChapterContent {
  const chapter = useContextSelector(HistoryContext, (ctx) => ctx.chapter);
  const fragment = useContextSelector(HistoryContext, (ctx) => ctx.fragment);

  if (fragment === "content") {
    const content = chapters[chapter].content;

    const { title, text, image } = content;

    return {
      title,
      text,
      image,
    };
  }

  return {
    title: "",
    text: "",
    image: "",
  };
}
