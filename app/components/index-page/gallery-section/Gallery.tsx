import { AspectRatio, Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import BaseHeading from "~/components/shared/BaseHeadings";
import Section from "~/components/shared/Section";
import { PhotoGalleryContext } from "~/context/photo-gallery-context";

import HorizontalScroll from "../../shared/HorizontalScroll";

const MAX_PHOTOS_AVALIABLE = 31;

export default function Gallery() {
  const { isPhotoZoomed, currentPhotoIdxZoomed } =
    useContext(PhotoGalleryContext);

  return (
    <>
      <Section id="photo-gallery" bg="primary.500">
        {!isPhotoZoomed && (
          <Flex direction="column" gap="2rem" justify="center" h="100%">
            <Box paddingInline="1rem">
              <BaseHeading as="h2" fontSize="38px" fontWeight="700" mb=".5rem">
                Galeria de fotos
              </BaseHeading>
            </Box>
            <Box>
              <PhotoGallery min={0} max={16} transform="translateX(-20px)" />
              <PhotoGallery min={17} max={31} transform="translateX(-55px)" />
            </Box>
          </Flex>
        )}
        {isPhotoZoomed && (
          <PhotoZoomed currentPhotoIdx={currentPhotoIdxZoomed} />
        )}
      </Section>
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
  const { setIsPhotoZoomed, setCurrentPhotoIdxZoomed } =
    useContext(PhotoGalleryContext);

  const photos = Array.from({ length: MAX_PHOTOS_AVALIABLE });

  function onPhotoZoomed(photoIdx: number) {
    setIsPhotoZoomed(true);
    setCurrentPhotoIdxZoomed(photoIdx);
  }

  return (
    <HorizontalScroll
      gap={2}
      columnSize="36%"
      h="270px"
      bg="text.500"
      paddingBlock="0.5rem"
    >
      {photos.map((_, i) => {
        if (i >= min && i <= max) {
          return (
            <AspectRatio
              key={i}
              ratio={1}
              onClick={() => onPhotoZoomed(i)}
              {...props}
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
  const { setIsPhotoZoomed, setCurrentPhotoIdxZoomed } =
    useContext(PhotoGalleryContext);

  function onClosePhotoZoomed() {
    setIsPhotoZoomed(false);
    setCurrentPhotoIdxZoomed(null);
  }

  return (
    <>
      <Flex
        justify="center"
        align="center"
        h="100vh"
        w="100vw"
        position="relative"
      >
        <AspectRatio key={currentPhotoIdx} ratio={9 / 16} h="100%" w="100%">
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
