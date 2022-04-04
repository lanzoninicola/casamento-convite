import { useEffect } from "react";
import {
  ActionFunction,
  MetaFunction,
  redirect,
  useActionData,
  useTransition,
} from "remix";
import Footer from "~/components/footer";
import Header from "~/components/header/Header";
import CeremonySection from "~/components/index-page/ceremony-section";
import Ceremony from "~/components/index-page/ceremony-section";
import Gallery from "~/components/index-page/gallery-section";
import HeroSection from "~/components/index-page/hero-section/HeroSection";
import AlertNoReadStory from "~/components/index-page/hystory-section/components/AlertNoReadStory";
import HistorySection from "~/components/index-page/hystory-section/HistorySection";
import InvitationSection from "~/components/index-page/invitation-section/InvitationSection";
import PlaceSection from "~/components/index-page/place-section/PlaceSection";
import RevelationSexBabySection from "~/components/index-page/revelation-sex-baby-section";
import NavigationMenu from "~/components/navigation/MobileNavigationMenu";
import FullPageVerticallyScroll from "~/components/shared/FullPageVerticallyScroll";
import ViewportInfo from "~/components/shared/ViewportInfo";
import WhatsAppWidget from "~/components/shared/WhatsAppWidget";
import { HistoryProvider } from "~/context/history-context";
import { NavigationProvider } from "~/context/navigation-context";
import { PhotoGalleryProvider } from "~/context/photo-gallery-context";
import { firestoreService } from "~/lib/firebase/db.server";
import RevelationGame from "~/modules/revelation-game/services/revelation-game.service";
import RevelationFormDeserializer from "~/modules/revelation-game/services/revelationFormDeserializer";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

export const meta: MetaFunction = () => {
  return {
    title: "Gustavo & Kelly",
    description: "Convite de casamento",
    "og:title": "Gustavo & Kelly",
    "og:description": "Convite de casamento",
    "og:image": "https://casamento-convite.vercel.app//images/ogimage.png",
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);

  const formBabySex = formData.get("baby-sex-selected");
  const formName = formData.get("name");

  const revelationService = new RevelationGame(firestoreService);
  const deserializer = new RevelationFormDeserializer();

  const revelationDetails = deserializer.deserialize({ formName, formBabySex });

  const response = await revelationService.add(revelationDetails);

  return {
    ok: response.ok,
  };
};

export default function Index() {
  const actionData = useActionData();
  const transition = useTransition();
  const state: RemixFormState = transition.submission
    ? "submitting"
    : !actionData
    ? "idle"
    : actionData?.ok
    ? "success"
    : "error";

  return (
    <>
      <HistoryProvider>
        <PhotoGalleryProvider>
          {/* <FullPageVerticallyScroll> */}
          <NavigationProvider>
            <NavigationMenu />
            <Header />
          </NavigationProvider>
          <HeroSection />
          <HistorySection />

          <CeremonySection />

          <PlaceSection />

          <RevelationSexBabySection actionData={actionData} formState={state} />

          <InvitationSection />
          <Gallery />
          {/* </FullPageVerticallyScroll> */}
          <Footer />
          <AlertNoReadStory />
          <WhatsAppWidget />
          {/* <ViewportInfo enableOnProduction={false} /> */}
        </PhotoGalleryProvider>
      </HistoryProvider>
    </>
  );
}
