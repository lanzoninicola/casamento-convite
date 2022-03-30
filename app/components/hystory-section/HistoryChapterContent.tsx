import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";

import BaseHeading from "../shared/Headings";
import useStoryContent from "./hooks/useStoryContent";
import NextChapterButton from "./NextChapterButton";

export default function HistoryChapterContent() {
  return (
    <>
      <Overlay />
      <BackgroundImage />

      <Flex
        w="100%"
        h="100%"
        direction="column"
        justify="flex-end"
        gap="6rem"
        pl="1rem"
        pr="1rem"
        position="absolute"
        top={0}
        left={0}
        zIndex={2}
      >
        <Content />
        <NextChapterButton />
      </Flex>
    </>
  );
}

function Content() {
  const { text, title } = useStoryContent();

  return (
    <Flex direction="column" gap="1.5rem" pl="1rem" pr="1rem">
      <BaseHeading as="h3" fontSize="36px" color="black" fontWeight="700">
        {title}
      </BaseHeading>
      <BaseHeading as="p" fontSize="20px" lineHeight="130%" color="black">
        {text}
      </BaseHeading>
    </Flex>
  );
}

function Overlay() {
  return (
    <Box
      zIndex={1}
      position="absolute"
      w="100%"
      h="100%"
      background="linear-gradient(180deg, rgba(197, 189, 177, 0) 10.42%, rgba(197, 189, 177, 0.69) 34.9%, #C5BDB1 58.33%);"
    ></Box>
  );
}

function BackgroundImage() {
  const { title, image } = useStoryContent();

  return (
    <Box zIndex={0}>
      <Image src={`/images/${image}.jpg`} alt={`${title}`} w="100vw" />
    </Box>
  );
}
