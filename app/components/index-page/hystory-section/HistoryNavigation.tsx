import { Box, Flex } from "@chakra-ui/react";
import useChapterContext from "~/context/history-context/hooks/useChapterContext";
import ChaptersBullets from "./components/ChaptersBullets";

import NextChapterButton from "./components/NextChapterButton";
import PrevChapterButton from "./components/PrevChapterButton";

export default function HistoryNavigation() {
  const { currentChapter } = useChapterContext();

  return (
    <Box>
      <Flex direction="row" justify="center" gap="1rem" mb="1.5rem">
        {currentChapter > 0 && <PrevChapterButton />}
        <NextChapterButton />
      </Flex>
      <ChaptersBullets />
    </Box>
  );
}
