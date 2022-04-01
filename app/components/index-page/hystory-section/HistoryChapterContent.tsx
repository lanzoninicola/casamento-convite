import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Typewriter from "typewriter-effect";
import BaseHeading from "~/components/shared/BaseHeadings";
import useStoryContent from "./hooks/useStoryContent";

export default function HistoryChapterContent() {
  return (
    <>
      <Overlay />
      <BackgroundImage />

      <Flex
        w="100%"
        h="100%"
        direction="column"
        justify="center"
        pl="1rem"
        pr="1rem"
        position="absolute"
        top={0}
        left={0}
        zIndex={2}
        transition="all 0.5s ease-in-out"
      >
        <Content />
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
      <Box fontSize="20px" lineHeight="130%" color="black">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(text).start();
          }}
          options={{
            delay: 90,
          }}
        />
      </Box>
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
      background="linear-gradient(180deg, rgba(211, 171, 158, 0) 10.42%, rgba(211, 171, 158, 0.69) 34.9%, rgba(211, 171, 158, 1) 70%)"
    ></Box>
  );
}

function BackgroundImage() {
  const { title, image } = useStoryContent();

  return (
    <Box zIndex={0}>
      <Image
        src={`/images/${image}.jpg`}
        alt={`${title}`}
        w="100vw"
        maxH="500px"
      />
    </Box>
  );
}
