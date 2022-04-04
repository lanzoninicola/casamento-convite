import { AspectRatio, Image } from "@chakra-ui/react";
import HorizontalScroll from "~/components/shared/HorizontalScroll";
import useCurrentPhotoZoomed from "~/context/photo-gallery-context/hooks/useCurrentPhotoZoomed";
import useIsPhotoZoomed from "~/context/photo-gallery-context/hooks/useIsPhotoZoomed";

const MAX_PHOTOS_AVALIABLE = 31;

export default function PhotoGallery({
  min,
  max = MAX_PHOTOS_AVALIABLE,
  ...props
}: {
  min: number;
  max?: number;
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
    <HorizontalScroll gap={2} columnSize="36%" h="270px" paddingBlock=".5rem">
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
                borderRadius="5px"
              />
            </AspectRatio>
          );
        }
      })}
    </HorizontalScroll>
  );
}
