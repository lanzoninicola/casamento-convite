import { Center, Stack } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import EllipseDecorator from "~/components/shared/EllipseDecorator";
import SafeArea from "~/components/shared/SafeArea";
import { TextDecorated } from "~/components/shared/TextDecorated";

export default function HistoryIntro() {
  return (
    <>
      <SafeArea top={75}>
        <Stack spacing="2rem">
          <Center>
            <TextDecorated>Nossa Historia</TextDecorated>
          </Center>
          <Center>
            <EllipseDecorator bg="secondary.500" diameter="270px">
              <BaseHeading
                as="h2"
                fontSize="36px"
                letterSpacing="-0.05em"
                textAlign="center"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                O INÍCIO
                <br />
                DO
                <br />
                VERDADEIRO
                <br />
                AMOR
              </BaseHeading>
            </EllipseDecorator>
          </Center>
        </Stack>
      </SafeArea>
    </>
  );
}
