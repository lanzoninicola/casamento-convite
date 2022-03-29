import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";
import useHistoryContext from "~/context/hooks/useHistoryContext";

import BottomBackgroundPattern from "../shared/BottomBackgroundPattern";
import Section from "../shared/Section";
import HistoryChapterContent from "./HistoryChapterContent";
import HistoryChapterIntro from "./HistoryChapterIntro";
import HistoryIntro from "./HistoryIntro";

export default function HistorySection() {
  const isReadingStories = useContextSelector(
    HistoryContext,
    (ctx) => ctx.isReadingStories
  );
  const fragment = useContextSelector(HistoryContext, (ctx) => ctx.fragment);
  const hasRead = useContextSelector(HistoryContext, (ctx) => ctx.hasRead);

  return (
    <>
      {!isReadingStories && (
        <Section>
          <HistoryIntro />
        </Section>
      )}
      {isReadingStories && !hasRead && (
        <>
          {fragment === "intro" && (
            <Section>
              <BottomBackgroundPattern />
              <HistoryChapterIntro />
            </Section>
          )}
          {fragment === "content" && (
            <Section pl="0" pr="0">
              <HistoryChapterContent />
            </Section>
          )}
        </>
      )}
    </>
  );
}
