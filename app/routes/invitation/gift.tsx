import { Box, Button, Grid, Image, Center } from "@chakra-ui/react";
import { Link, Outlet } from "remix";
import ArrowRight from "~/components/shared/ArrowRight";
import { BackToHomeButton } from "~/components/shared/BackToHomeButton";
import BaseHeading from "~/components/shared/BaseHeadings";
import usePulseAnimation from "~/components/shared/hooks/usePulseAnimation";
import Section from "~/components/shared/Section";

export default function Gift() {
  return (
    <Section
      padding="1rem"
      bg="primary.500"
      objectFit="cover"
      position="relative"
    >
      <Grid gridTemplateRows="1fr 1fr .25fr" h="100%">
        <Box m="2rem" position="relative">
          <BaseHeading
            as="h1"
            fontSize="38px"
            fontWeight="700"
            lineHeight="1"
            zIndex={1}
            position="absolute"
          >
            Estamos muito
            <br /> gratos por seu <br />
            generoso
            <br /> presente.
          </BaseHeading>
          <Box
            w="214px"
            h="214px"
            position="absolute"
            top={"50px"}
            right={"-50px"}
            zIndex={0}
          >
            <Image src="/images/gift-ellipse-decorator.png" />
          </Box>
        </Box>
        <Outlet />
        <Center zIndex={1}>
          <BackToHomeButton url="/#photo-gallery" />
        </Center>
      </Grid>
      <PoligonDecorative />
    </Section>
  );
}

function PoligonDecorative() {
  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      w="100vw"
      h="50vh"
      bg="white"
      style={{
        clipPath: "polygon(0 0, 100% 50%, 100% 100%, 0% 100%)",
      }}
      zIndex={0}
    ></Box>
  );
}
