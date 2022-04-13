import { Center, Grid, Stack, VStack, Text } from "@chakra-ui/react";
import { Link } from "remix";
import BaseHeading from "~/components/shared/BaseHeadings";
import EllipseDecorator from "~/components/shared/EllipseDecorator";
import usePulseAnimation from "~/components/shared/hooks/usePulseAnimation";
import Section from "~/components/shared/Section";

export default function HistorySection() {
  const pulseAnimationCSS = usePulseAnimation(211, 171, 158);

  return (
    <>
      <Section id="our-story" p={0}>
        <Grid
          className="history-wrapper"
          minH="100vh"
          gridTemplateRows="1fr auto"
        >
          <Center h="100%">
            <Stack
              spacing="2rem"
              h="100%"
              justify="center"
              className="ck-stack"
            >
              <Link to="/history/1">
                <EllipseDecorator
                  bg="secondary.500"
                  animation={pulseAnimationCSS}
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
              </Link>
            </Stack>
          </Center>
        </Grid>
      </Section>
    </>
  );
}
