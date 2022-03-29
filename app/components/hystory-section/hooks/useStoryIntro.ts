import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";

import { chapters, ChapterIntro } from "../chapters";

export default function useStoryIntro(): ChapterIntro {
  const chapter = useContextSelector(HistoryContext, (ctx) => ctx.chapter);
  const fragment = useContextSelector(HistoryContext, (ctx) => ctx.fragment);

  if (fragment === "intro") {
    const intro = chapters[chapter]?.intro;

    if (intro) {
      const { textMonth, textYear, title } = intro;

      return {
        textMonth,
        textYear,
        title,
      };
    }
  }

  return {
    textMonth: "",
    textYear: "",
    title: "",
  };
}
