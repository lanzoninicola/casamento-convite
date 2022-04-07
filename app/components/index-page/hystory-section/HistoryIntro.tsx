import { Center, keyframes, Stack, Text, VStack } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import EllipseDecorator from "~/components/shared/EllipseDecorator";
import usePulseAnimation from "~/components/shared/hooks/usePulseAnimation";
import SafeArea from "~/components/shared/SafeArea";

import useChaptersNavigation from "./hooks/useChaptersNavigation";

export default function HistoryIntro() {
  const { nextChapter } = useChaptersNavigation();
  const pulseAnimationCSS = usePulseAnimation(211, 171, 158);

  function handleClick() {
    nextChapter();
  }

  return (
    <>
      <Center h="100%">
        <Stack spacing="2rem" h="100%" justify="center" className="ck-stack">
          {/* <Center>
            <TextDecorated>Nossa Historia</TextDecorated>
          </Center> */}

          <EllipseDecorator
            bg="secondary.500"
            animation={pulseAnimationCSS}
            onClick={handleClick}
          >
            <VStack justify="center" h="100%">
              <BaseHeading
                as="h2"
                fontSize="1.5rem"
                letterSpacing="1px"
                textAlign="center"
                fontWeight="400"
                lineHeight="110%"
              >
                LEIA <br /> O INÍCIO DO
                <br />
                VERDADEIRO
                <br />
                AMOR
              </BaseHeading>
              <Text
                fontSize="16px"
                letterSpacing="5px"
                textTransform="uppercase"
                fontWeight={700}
              >
                CLIQUE AQUI
              </Text>
            </VStack>
          </EllipseDecorator>
        </Stack>
      </Center>
    </>
  );
}
