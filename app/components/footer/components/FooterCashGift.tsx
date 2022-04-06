import { EnvelopeIcon, PixIcon } from "~/components/shared/Icons";
import FooterButton from "./FooterButton";

export default function FooterCashGift() {
  return (
    <>
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
    </>
  );
}
