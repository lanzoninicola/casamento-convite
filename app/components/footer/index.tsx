import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Footer() {
  const [clickCounter, setClickCounter] = useState<number>(0);

  return <Box h="50px"></Box>;
}
