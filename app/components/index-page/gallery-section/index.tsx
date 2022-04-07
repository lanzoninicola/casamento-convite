import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import useAlertHistorySkipped from "~/components/index-page/hystory-section/hooks/useAlertHistorySkipped";
import ArrowRight from "~/components/shared/ArrowRight";
import BaseHeading from "~/components/shared/BaseHeadings";
import SafeArea from "~/components/shared/SafeArea";
import Section from "~/components/shared/Section";
import useCurrentPhotoZoomed from "~/context/photo-gallery-context/hooks/useCurrentPhotoZoomed";
import useIsPhotoZoomed from "~/context/photo-gallery-context/hooks/useIsPhotoZoomed";

import PhotoGallery from "./components/PhotoGallery";
import PhotoZoomed from "./components/PhotoZoomed";

export default function Gallery() {
  const { isPhotoZoomed } = useIsPhotoZoomed();
  const { currentPhotoIdxZoomed } = useCurrentPhotoZoomed();

  const { targetRef } = useAlertHistorySkipped();

  return (
    <>
      <div ref={targetRef}>
        <Section
          id="photo-gallery"
          h="auto"
          bg="primary.500"
          paddingBlock="4rem"
          overflow="hidden"
        >
          {!isPhotoZoomed && (
            <Flex direction="column" gap=".5rem" justify="center" h="100%">
              <Box paddingInline="1rem">
                <BaseHeading fontSize="20px" lineHeight={1.1} mb="1rem">
                  Galeria de lembranças, <br /> uma história de amor e
                  serenidade.
                </BaseHeading>
                <Grid
                  gridTemplateColumns="1fr auto"
                  alignItems="center"
                  gap="0.25rem"
                >
                  <Text
                    fontSize="14px"
                    lineHeight={1.1}
                    textAlign="right"
                    fontStyle="italic"
                  >
                    Arrasta para o lado
                  </Text>
                  <ArrowRight />
                </Grid>
              </Box>
              <Box>
                <PhotoGallery min={0} transform="translateX(-20px)" />
              </Box>
            </Flex>
          )}
          {isPhotoZoomed && (
            <PhotoZoomed currentPhotoIdx={currentPhotoIdxZoomed} />
          )}
        </Section>
      </div>
    </>
  );
}
