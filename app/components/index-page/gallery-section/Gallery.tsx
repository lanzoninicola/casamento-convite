import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import BaseHeading from "~/components/shared/BaseHeadings";
import SafeArea from "~/components/shared/SafeArea";
import Section from "~/components/shared/Section";
import useCurrentPhotoZoomed from "~/context/photo-gallery-context/hooks/useCurrentPhotoZoomed";
import useIsPhotoZoomed from "~/context/photo-gallery-context/hooks/useIsPhotoZoomed";

import HorizontalScroll from "../../shared/HorizontalScroll";

import { useInView } from "react-intersection-observer";
import useHasReadContext from "~/context/history-context/hooks/useHasReadContext";
import useAlertHistorySkipped, {
  HistorySkyppedStatus,
} from "~/components/index-page/hystory-section/hooks/useAlertHistorySkipped";
import ArrowRight from "~/components/shared/ArrowRight";
import useAlertHistorySkippedContext from "~/context/history-context/hooks/useAlertHistorySkippedContext";

const MAX_PHOTOS_AVALIABLE = 31;

export default function Gallery() {
  const { isPhotoZoomed } = useIsPhotoZoomed();
  const { currentPhotoIdxZoomed } = useCurrentPhotoZoomed();

  const { targetRef } = useAlertHistorySkipped();

  return (
    <>
      <div ref={targetRef}>
        <Section id="photo-gallery" bg="primary.500">
          <SafeArea>
            {!isPhotoZoomed && (
              <Flex direction="column" gap=".5rem" justify="center" h="100%">
                <Box paddingInline="1rem">
                  <BaseHeading
                    as="h2"
                    fontSize="38px"
                    fontWeight="400"
                    mb=".5rem"
                    letterSpacing="-1px"
                  >
                    Galeria de fotos
                  </BaseHeading>
                  <Text fontSize="16px" lineHeight={1.1}>
                    Momentos de lembrança, uma história <br />
                    de amor e serenidade.
                  </Text>
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
                  <PhotoGallery
                    min={0}
                    max={16}
                    transform="translateX(-20px)"
                  />
                  <PhotoGallery
                    min={17}
                    max={31}
                    transform="translateX(-55px)"
                  />
                </Box>
              </Flex>
            )}
            {isPhotoZoomed && (
              <PhotoZoomed currentPhotoIdx={currentPhotoIdxZoomed} />
            )}
          </SafeArea>
        </Section>
      </div>
    </>
  );
}

function PhotoGallery({
  min,
  max,
  ...props
}: {
  min: number;
  max: number;
  [x: string]: any;
}) {
  const { setIsPhotoZoomed } = useIsPhotoZoomed();
  const { setCurrentPhotoIdxZoomed } = useCurrentPhotoZoomed();

  const photos = Array.from({ length: MAX_PHOTOS_AVALIABLE });

  function onPhotoZoomed(photoIdx: number) {
    setIsPhotoZoomed(true);
    setCurrentPhotoIdxZoomed(photoIdx);
  }

  return (
    <HorizontalScroll gap={2} columnSize="36%" h="270px" paddingBlock="0.5rem">
      {photos.map((_, i) => {
        if (i >= min && i <= max) {
          return (
            <AspectRatio
              key={i}
              ratio={1}
              onClick={() => onPhotoZoomed(i)}
              {...props}
              boxShadow="lg"
            >
              <Image
                src={`/images/gallery/gustavo_kelly_gallery_${i}.jpeg`}
                alt={`Gustavo e Kelly foto ${i}`}
                inlineSize="100%"
                objectFit="cover"
                borderRadius="2px"
              />
            </AspectRatio>
          );
        }
      })}
    </HorizontalScroll>
  );
}

function PhotoZoomed({ currentPhotoIdx }: { currentPhotoIdx: number | null }) {
  const { setIsPhotoZoomed } = useIsPhotoZoomed();
  const { setCurrentPhotoIdxZoomed } = useCurrentPhotoZoomed();

  function onClosePhotoZoomed() {
    setIsPhotoZoomed(false);
    setCurrentPhotoIdxZoomed(null);
  }

  return (
    <>
      <Flex
        justify="center"
        align="center"
        h="100%"
        w="100vw"
        position="relative"
      >
        <AspectRatio
          key={currentPhotoIdx}
          ratio={9 / 16}
          h="100%"
          w="100%"
          onClick={onClosePhotoZoomed}
        >
          <Image
            src={`/images/gallery/gustavo_kelly_gallery_${currentPhotoIdx}.jpeg`}
            alt={`Gustavo e Kelly foto ${currentPhotoIdx}`}
            inlineSize="100%"
            objectFit="cover"
          />
        </AspectRatio>
        <IconButton
          bg="secondary.500"
          aria-label="Fecha janela da foto"
          size="lg"
          icon={<MdOutlineClose />}
          position="absolute"
          bottom="3rem"
          right="3rem"
          onClick={onClosePhotoZoomed}
        />
      </Flex>
    </>
  );
}
