import { HStack, Link, Text } from "@chakra-ui/react";
import { SiWaze } from "react-icons/si";

import ArrowRight from "../ArrowRight";

export default function WazeButton({
  address,
  bg = "gray.200",
}: {
  address: string;
  bg?: string;
}) {
  const baseUrl =
    "https://ul.waze.com/ul?place=ChIJK5YS0J1U5ZQRJAIXsOXDlmU&ll=-26.17272180%2C-52.67592230&navigate=yes";

  return (
    <Link href={`${baseUrl}${address}`} isExternal w="100%" maxW="150px">
      <HStack bg={bg} borderRadius="5px" p=".25rem .5rem" shadow={"lg"}>
        <HStack>
          <SiWaze />
          <Text fontSize="16px">IR AGORA</Text>
        </HStack>
        <ArrowRight size={16} />
      </HStack>
    </Link>
  );
}
