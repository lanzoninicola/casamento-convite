import { Box, Flex, Image } from "@chakra-ui/react";

import BaseHeading from "../shared/Headings";
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
        pb="2rem"
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
  return (
    <Flex direction="column" gap="1.5rem" pl="1rem" pr="1rem">
      <BaseHeading as="h3" fontSize="36px" color="black">
        O avião branco
      </BaseHeading>
      <BaseHeading as="p" fontSize="20px" lineHeight="130%" color="black">
        O cavalo do bendito príncipe não era branco mas o avião que o acompanhou
        sim… Finalmente em Pato Branco, o estacionamento de ônibus (chegada com
        direito a), balões vermelhos, os corações pulando e batendo... Foi a
        primeira vez que nossos olhos se encontraram ao vivo.
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
  return (
    <Box zIndex={0}>
      <Image
        src="/images/history-content-chap0.jpg"
        alt="Gustavo e Kelly - Chapter 0"
      />
    </Box>
  );
}
