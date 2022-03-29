import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { HistoryContext } from "~/context/context";

export default function NextChapterButton() {
  const currentHistory = useContext(HistoryContext);

  function handleClick() {
    const nextHistory = { ...currentHistory };

    if (nextHistory.chapter) {
      nextHistory.chapter = nextHistory.chapter + 1;
    }
  }

  return (
    <Flex w="100%" justify="flex-end" onClick={handleClick}>
      <Box w="40px" h="40px" backgroundColor="primary.500" borderRadius="5px">
        <Center h="100%">
          <Image src="/images/arrow-right.svg" />
        </Center>
      </Box>
    </Flex>
  );
}
