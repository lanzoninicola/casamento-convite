import { Center, Flex } from "@chakra-ui/react";
import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";
import NextChapterButton from "./NextChapterButton";

export default function HistoryCardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasRead = useContextSelector(HistoryContext, (ctx) => ctx.hasRead);

  return (
    <Flex id="history-wrapper" minH="100vh" direction="column" pb="2rem">
      <Center flex={1}>{children}</Center>
      {!hasRead && <NextChapterButton />}
    </Flex>
  );
}
