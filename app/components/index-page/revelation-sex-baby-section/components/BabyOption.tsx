import { Box, VStack, Image, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import BaseHeading from "~/components/shared/BaseHeadings";
import { BabySex } from "./RevelationGame";

export default function BabyOption({
  sex,
  ...props
}: {
  sex: BabySex;
  [key: string]: any;
}) {
  return (
    <VStack spacing="2rem" {...props}>
      <BaseHeading fontSize="20px" color="text.500" textAlign="center">
        {sex === "girl" ? "menina?" : "menino?"}
      </BaseHeading>
      <Box>
        <Image
          src={`/images/baby-${sex}.png`}
          alt={sex === "girl" ? "Menina" : "Menino"}
        />
      </Box>
    </VStack>
  );
}
