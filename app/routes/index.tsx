import { MetaFunction } from "remix";
import Gallery from "~/components/index-page/gallery-section/Gallery";
import HeroSection from "~/components/index-page/hero-section/HeroSection";
import HistorySection from "~/components/index-page/hystory-section/HistorySection";

import InvitationSection from "~/components/index-page/invitation-section/InvitationSection";
import PlaceSection from "~/components/index-page/place-section/PlaceSection";
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
