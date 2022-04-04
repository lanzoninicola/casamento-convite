import { Box, Image, VStack } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import AnimalImage from "./AnimalImage";

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
      <AnimalImage sex={sex} />
    </VStack>
  );
}
