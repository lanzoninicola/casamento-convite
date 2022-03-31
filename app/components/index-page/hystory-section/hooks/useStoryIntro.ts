import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/history-context";
import { ChapterIntro } from "../chapters";

import useChapters from "./useChapters";

export default function useStoryIntro(): ChapterIntro {
  const { chapters } = useChapters();
  const chapterIdx = useContextSelector(HistoryContext, (ctx) => ctx.chapter);
  const chapterType = chapters[chapterIdx].type;

  if (chapterType === "intro") {
    const intro = chapters[chapterIdx] as ChapterIntro;

    if (intro) {
      const { textMonth, textYear, title } = intro;

      return {
        type: chapterType,
        textMonth,
        textYear,
        title,
      };
    }
  }

  return {
    type: "intro",
    textMonth: "",
    textYear: "",
    title: "",
  };
}
