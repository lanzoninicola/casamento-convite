import { Box, Flex, Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import BaseHeading from "~/components/shared/BaseHeadings";

export default function HistoryChapterContent({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <>
      <Overlay />
      <BackgroundImage title={title} image={image} />

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
        <Content text={text} title={title} />
      </Flex>
    </>
  );
}

function Content({ title, text }: { title: string; text: string }) {
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
      className="overlay"
      zIndex={1}
      position="absolute"
      w="100%"
      h="100%"
      background="linear-gradient(180deg, rgba(211, 171, 158, 0) 10.42%, rgba(211, 171, 158, 0.69) 34.9%, rgba(211, 171, 158, 1) 70%)"
    ></Box>
  );
}

function BackgroundImage({ title, image }: { title: string; image: string }) {
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
