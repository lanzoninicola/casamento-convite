import { Center, keyframes, Stack, Text } from "@chakra-ui/react";
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
      <SafeArea>
        <Stack spacing="2rem" h="100%" justify="center">
          {/* <Center>
            <TextDecorated>Nossa Historia</TextDecorated>
          </Center> */}
          <Center onClick={handleClick}>
            <EllipseDecorator
              bg="secondary.500"
              diameter="270px"
              animation={pulseAnimationCSS}
            >
              <BaseHeading
                as="h2"
                fontSize="24px"
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
            </EllipseDecorator>
          </Center>
        </Stack>
      </SafeArea>
    </>
  );
}
