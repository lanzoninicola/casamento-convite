import { AspectRatio, Box, Grid, Image } from "@chakra-ui/react";
import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";

export default function Gallery() {
  const hasRead = useContextSelector(HistoryContext, (ctx) => ctx.hasRead);

  const photos = Array.from({ length: 31 });

  return (
    <>
      {hasRead && (
        <Grid
          w="100vw"
          h="200px"
          bg="primary.500"
          gridAutoFlow="column"
          gridAutoColumns="36%"
          gap={2}
          overflowX="auto"
          overscrollBehaviorX="contain"
        >
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
        </Grid>
      )}
    </>
  );
}
