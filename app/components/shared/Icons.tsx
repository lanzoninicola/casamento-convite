import { Image } from "@chakra-ui/react";

export function PixIcon({ size = 24 }: { size?: number }) {
  return <Image src={`/images/pix-icon-${size}.svg`} alt="Pix" />;
}

export function EnvelopeIcon({ size = 24 }: { size?: number }) {
  return <Image src={`/images/envelope-icon-${size}.svg`} alt="Envelope" />;
}

export function HeartIcon() {
  return <Image src="/images/heart-icon.svg" />;
}

export function OkCircleIcon({ size = 24 }: { size?: number }) {
  return <Image src={`/images/ok-circle-icon-${size}.svg`} />;
}

export function GiftIcon({ size = 24 }: { size?: number }) {
  return <Image src={`/images/gift-icon-${size}.svg`} />;
}
