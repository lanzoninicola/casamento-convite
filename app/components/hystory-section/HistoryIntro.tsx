import { Center, Flex } from "@chakra-ui/react";

import EllipseDecorator from "../shared/EllipseDecorator";
import BaseHeading from "../shared/Headings";
import { HeadingWithLineDecoration } from "../shared/HeadingWithLineDecoration";
import HistoryCardWrapper from "./HistoryCardWrapper";

export default function HistoryIntro() {
  return (
    <>
      <HistoryCardWrapper>
        <Flex direction="column" gap="3rem">
          <Flex direction="column" gap="2rem">
            <EllipseDecorator bg="primary.500" diameter="50px" />
            <EllipseDecorator bg="secondary.500" diameter="300px">
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
            <EllipseDecorator bg="primary.500" diameter="50px" />
          </Flex>
          <Center>
            <HeadingWithLineDecoration>
              Nossa Historia
            </HeadingWithLineDecoration>
          </Center>
        </Flex>
      </HistoryCardWrapper>
    </>
  );
}
