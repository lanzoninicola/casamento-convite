import { Box, Image } from "@chakra-ui/react";

import { BabySex } from "./RevelationGame";

export default function AnimalImage({
  sex,
  hImage,
  ...props
}: {
  sex: BabySex | null;
  hImage?: string;
  [key: string]: any;
}) {
  return (
    <Box {...props}>
      <Image
        src={`/images/baby-${sex}.png`}
        alt={sex === "girl" ? "Menina" : "Menino"}
        h={hImage || "100%"}
      />
    </Box>
  );
}
