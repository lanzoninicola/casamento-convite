import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";
import BottomBackgroundPattern from "../shared/BottomBackgroundPattern";
import Section from "../shared/Section";
import HistoryChapterContent from "./HistoryChapterContent";
import HistoryChapterIntro from "./HistoryChapterIntro";
import HistoryIntro from "./HistoryIntro";

export default function HistorySection() {
  const showIntro = useContextSelector(
    HistoryContext,
    (showIntro) => showIntro
  );

  console.log(showIntro);

  return (
    <>
      {showIntro && (
        <Section>
          <HistoryIntro />
        </Section>
      )}
      <Section>
        <BottomBackgroundPattern />
        <HistoryChapterIntro />
      </Section>
      <Section pl="0" pr="0">
        <HistoryChapterContent />
      </Section>
    </>
  );
}
