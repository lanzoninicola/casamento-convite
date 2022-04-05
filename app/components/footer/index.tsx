import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "remix";

import { HeartIcon } from "../shared/Icons";

export default function Footer() {
  let navigate = useNavigate();
  const [clickCounter, setClickCounter] = useState<number>(0);

  function handleClicks() {
    setClickCounter(clickCounter + 1);
  }

  useEffect(() => {
    if (clickCounter > 5) {
      navigate("/service");
    }
  }, [clickCounter]);

  return (
    <Center bg="secondary.500" paddingBlock="1rem" onClick={handleClicks}>
      <VStack spacing={0}>
        <HStack>
          <FooterText>Made with</FooterText>
          <HeartIcon />
          <FooterText>by Nicola Lanzoni</FooterText>
        </HStack>

        <FooterText>lanzoni.nicola@gmail.com</FooterText>
      </VStack>
    </Center>
  );
}

function FooterText({ children }: { children: React.ReactNode }) {
  return (
    <Text
      as="span"
      fontSize="14px"
      color="text.500"
      letterSpacing="-1px"
      fontWeight={700}
    >
      {children}
    </Text>
  );
}
