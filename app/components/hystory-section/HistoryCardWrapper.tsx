import { Center, Flex } from "@chakra-ui/react";

import NextChapterButton from "./NextChapterButton";

export default function HistoryCardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      id="history-wrapper"
      minH="100vh"
      direction="column"
      paddingInline="1rem"
    >
      <Center flex={1}>{children}</Center>
      <NextChapterButton />
    </Flex>
  );
}