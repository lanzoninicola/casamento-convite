import { HStack, Link, Text } from "@chakra-ui/react";
import { SiGooglemaps } from "react-icons/si";

import ArrowRight from "../ArrowRight";

export default function GoogleMapsButton({
  address,
  bg = "gray.200",
}: {
  address: string;
  bg?: string;
}) {
  const baseUrl = "https://www.google.com/maps/dir/?api=1&destination=";

  return (
    <Link href={`${baseUrl}${address}`} isExternal w="100%" maxW="150px">
      <HStack bg={bg} borderRadius="5px" p=".25rem .5rem" shadow={"lg"}>
        <HStack>
          <SiGooglemaps />
          <Text fontSize="16px">IR AGORA</Text>
        </HStack>
        <ArrowRight size={16} />
      </HStack>
    </Link>
  );
}
