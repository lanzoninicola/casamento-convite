import { Box, Center, Text } from "@chakra-ui/react";
import useChapterContext from "~/context/history-context/hooks/useChapterContext";

export default function Bullet({
  index,
  ...props
}: {
  index: number;
  [x: string]: any;
}) {
  const { currentChapter, setCurrentChapter } = useChapterContext();

  function onChapterSelection() {
    setCurrentChapter(index);
  }

  return (
    <Box
      w={currentChapter !== index ? "14px" : "24px"}
      h={currentChapter !== index ? "14px" : "24px"}
      borderRadius="100%"
      bg="primary.500"
      {...props}
      onClick={onChapterSelection}
      transition="all .1s ease-in-out"
    >
      <Center h="100%">
        <Text
          as="span"
          fontSize={currentChapter !== index ? "8px" : "14px"}
          fontWeight="600"
        >
          {index}
        </Text>
      </Center>
    </Box>
  );
}
