import { Image } from "@chakra-ui/react";

export default function ArrowRight({ size = 24 }: { size?: number }) {
  return <Image src={`/images/arrow-right-${size}.svg`} />;
}
