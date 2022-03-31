import { AspectRatio, Image } from "@chakra-ui/react";

import HorizontalScroll from "../../shared/HorizontalScroll";

export default function Gallery() {
  const photos = Array.from({ length: 31 });

  return (
    <>
      <HorizontalScroll gap={2} columnSize="36%">
        {photos.map((_, i) => {
          return (
            <AspectRatio key={i} ratio={1}>
              <Image
                src={`/images/gallery/gustavo_kelly_gallery_${i}.jpeg`}
                alt={`Gustavo e Kelly foto ${i}`}
                inlineSize="100%"
              />
            </AspectRatio>
          );
        })}
      </HorizontalScroll>
    </>
  );
}
