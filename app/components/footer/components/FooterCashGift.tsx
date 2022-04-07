import { Flex, Grid, HStack } from "@chakra-ui/react";
import { EnvelopeIcon, GiftIcon, PixIcon } from "~/components/shared/Icons";
import FooterButton from "./FooterButton";
import FooterHeading from "./FooterHeading";

export default function FooterCashGift() {
  return (
    <>
      <Flex direction="column" justify="center" gap="1rem">
        <HStack>
          <GiftIcon />
          <FooterHeading>Presente</FooterHeading>
        </HStack>
        <Grid gridTemplateColumns="1fr 1fr" gap="1rem" justifyItems="center">
          <FooterButton
            leftIcon={<EnvelopeIcon size={24} />}
            text="ENVELOPE"
            to="/invitation/gift/envelope"
          />
          <FooterButton
            leftIcon={<PixIcon size={24} />}
            text="PIX"
            to="/invitation/gift/pix"
          />
        </Grid>
      </Flex>
    </>
  );
}
