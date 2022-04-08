import { Flex } from "@chakra-ui/react";
import GoogleMapsButton from "~/components/shared/buttons/GoogleMapsButton";
import { OkCircleIcon } from "~/components/shared/Icons";
import WazeButton from "~/components/shared/buttons/WazeButton";
import settings from "~/modules/settings";
import FooterButton from "./FooterButton";
import FooterHeading from "./FooterHeading";

export default function FooterRightColumn() {
  return (
    <Flex direction="column" alignItems="flex-end" gap="2rem" w="100%">
      <Flex direction="column" alignItems="flex-end" gap=".5rem" w="100%">
        <FooterHeading>Confirme presença</FooterHeading>
        <FooterButton
          leftIcon={<OkCircleIcon size={16} />}
          text="EU QUERO"
          to="/invitation"
        />
      </Flex>
      <Flex direction="column" alignItems="flex-end" gap=".5rem" w="100%">
        <FooterHeading>Chácara Zanin</FooterHeading>
        <Flex direction="column" alignItems="flex-end" gap=".5rem" w="100%">
          <GoogleMapsButton address={settings.lunchPlaceAddress} />
          <WazeButton address={settings.lunchPlaceAddress} />
        </Flex>
      </Flex>
    </Flex>
  );
}
