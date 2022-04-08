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

export function MeatIcon({ size = 40 }: { size?: number }) {
  return <Image src={`/images/meat-icon-${size}.svg`} />;
}

export function VegetableIcon({ size = 40 }: { size?: number }) {
  return <Image src={`/images/vegetable-icon-${size}.svg`} />;
}

export function MeatAndVegetableIcon({ size = 40 }: { size?: number }) {
  return <Image src={`/images/meat-vegetable-icon-${size}.svg`} />;
}

export function HumanIcon({ size = 60 }: { size?: number }) {
  return <Image src={`/images/human-icon-${size}.svg`} />;
}

export function SearchIcon({ size = 24 }: { size?: number }) {
  return <Image src={`/images/search-icon-${size}.svg`} />;
}

export function FilterIcon({ size = 24 }: { size?: number }) {
  return <Image src={`/images/filter-icon-${size}.svg`} />;
}
