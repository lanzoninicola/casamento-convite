import { MetaFunction } from "remix";
import Gallery from "~/components/index-page/gallery-section/Gallery";
import HeroSection from "~/components/index-page/hero-section/HeroSection";
import HistorySection from "~/components/index-page/hystory-section/HistorySection";

import InvitationSection from "~/components/index-page/invitation-section/InvitationSection";
import PlaceSection from "~/components/index-page/place-section/PlaceSection";
import FullPageVerticallyScroll from "~/components/shared/FullPageVerticallyScroll";
import { HistoryProvider } from "~/context/history-context";
import { PhotoGalleryProvider } from "~/context/photo-gallery-context";

export const meta: MetaFunction = () => {
  return {
    title: "Gustavo & Kelly",
    description: "Convite de casamento",
    "og:image": "/images/gustavo-kelly.png",
  };
};

export default function Index() {
  return (
    <>
      <HistoryProvider>
        <FullPageVerticallyScroll>
          <HeroSection />
          <HistorySection />
          <PhotoGalleryProvider>
            <Gallery />
          </PhotoGalleryProvider>
          <PlaceSection />
          <InvitationSection />
        </FullPageVerticallyScroll>
      </HistoryProvider>
    </>
  );
}
