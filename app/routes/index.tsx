import { MetaFunction } from "remix";
import Gallery from "~/components/gallery-section/Gallery";
import HeroSection from "~/components/hero-section/HeroSection";
import HistorySection from "~/components/hystory-section/HistorySection";
import InvitationSection from "~/components/invitation-section/InvitationSection";
import PlaceSection from "~/components/place-section/PlaceSection";
import FullPageVerticallyScroll from "~/components/shared/FullPageVerticallyScroll";
import { HistoryProvider } from "~/context/history-context";

export const meta: MetaFunction = () => {
  return {
    title: "Gustavo & Kelly - Convite",
    description: "Convite para casamento de Gustavo e Kelly",
  };
};

export default function Index() {
  return (
    <>
      <HistoryProvider>
        <FullPageVerticallyScroll>
          <HeroSection />
          <HistorySection />
          {/* <Gallery /> */}
          <PlaceSection />
          <InvitationSection />
        </FullPageVerticallyScroll>
      </HistoryProvider>
    </>
  );
}
