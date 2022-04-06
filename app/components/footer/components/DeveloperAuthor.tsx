import { Center, VStack, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "remix";
import { HeartIcon } from "~/components/shared/Icons";
import FooterText from "./FooterText";

export default function DeveloperAuthor() {
  const [clickCounter, setClickCounter] = useState<number>(0);
  let navigate = useNavigate();

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
