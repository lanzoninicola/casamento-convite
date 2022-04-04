import { AspectRatio, Flex, IconButton, Image } from "@chakra-ui/react";
import { MdOutlineClose } from "react-icons/md";
import useCurrentPhotoZoomed from "~/context/photo-gallery-context/hooks/useCurrentPhotoZoomed";
import useIsPhotoZoomed from "~/context/photo-gallery-context/hooks/useIsPhotoZoomed";

export default function PhotoZoomed({
  currentPhotoIdx,
}: {
  currentPhotoIdx: number | null;
}) {
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
          bg="primary.500"
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
