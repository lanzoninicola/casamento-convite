import { Center, keyframes, Stack, Text } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import EllipseDecorator from "~/components/shared/EllipseDecorator";
import SafeArea from "~/components/shared/SafeArea";

import useChaptersNavigation from "./hooks/useChaptersNavigation";

export default function HistoryIntro() {
  const { nextChapter } = useChaptersNavigation();

  function handleClick() {
    nextChapter();
  }

  const pulse = keyframes`
  	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 10px rgba(211, 171, 158, 0.7);
	}
	
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 30px rgba(211, 171, 158, 0);
    }

    90% {
      transform: scale(1);
      box-shadow: 0 0 0 45px rgba(211, 171, 158, 0);
    }
    
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(211, 171, 158, 0);
    }
  `;

  const pulseAnimation = `${pulse} infinite 2s linear`;

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
              animation={pulseAnimation}
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
