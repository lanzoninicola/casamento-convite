import { Box, Button, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { SiGooglemaps } from "react-icons/si";
import ArrowRight from "./ArrowRight";

export default function GoogleMapsButton({
  address,
  bg = "gray.200",
}: {
  address: string;
  bg?: string;
}) {
  const baseUrl = "https://www.google.com/maps/dir/?api=1&destination=";

  return (
    <Link href={`${baseUrl}${address}`} isExternal>
      <HStack
        bg={bg}
        spacing={8}
        borderRadius="5px"
        p=".25rem .5rem"
        shadow={"lg"}
      >
        <HStack>
          <SiGooglemaps />
          <Text fontSize="16px">IR AGORA</Text>
        </HStack>
        <ArrowRight size={16} />
      </HStack>
    </Link>
  );
}
