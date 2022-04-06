import { Flex } from "@chakra-ui/react";
import GoogleMapsButton from "~/components/shared/GoogleMapsButton";
import { OkCircleIcon } from "~/components/shared/Icons";
import WazeButton from "~/components/shared/WazeButton";
import settings from "~/modules/settings";
import FooterButton from "./FooterButton";
import FooterHeading from "./FooterHeading";

export default function FooterRightColumn() {
  return (
    <Flex direction="column" alignItems="flex-end" gap="2rem">
      <Flex direction="column" alignItems="flex-end" gap=".5rem">
        <FooterHeading>Confirme presença</FooterHeading>
        <FooterButton
          leftIcon={<OkCircleIcon size={16} />}
          text="EU QUERO"
          to="/invitation"
          spacing="2rem"
        />
      </Flex>
      <Flex direction="column" alignItems="flex-end" gap=".5rem">
        <FooterHeading>Chácara Zanin</FooterHeading>
        <Flex direction="column" alignItems="flex-end" gap=".5rem">
          <GoogleMapsButton address={settings.lunchPlaceAddress} />
          <WazeButton address={settings.lunchPlaceAddress} />
        </Flex>
      </Flex>
    </Flex>
  );
}
