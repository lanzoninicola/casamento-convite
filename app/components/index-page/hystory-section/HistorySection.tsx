import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "remix";
import ArrowDown from "~/components/shared/ArrowDown";
import ArrowRight from "~/components/shared/ArrowRight";
import Section from "~/components/shared/Section";
import useChapterContext from "~/context/history-context/hooks/useChapterContext";
import useHasReadContext from "~/context/history-context/hooks/useHasReadContext";

import HistoryChapterContent from "./HistoryChapterContent";
import HistoryChapterIntro from "./HistoryChapterIntro";
import HistoryIntro from "./HistoryIntro";
import useChapters from "./hooks/useChapters";
import useChaptersNavigation from "./hooks/useChaptersNavigation";
import useChapterFragment from "./hooks/useChapterType";
import NextChapterButton from "./NextChapterButton";
import PrevChapterButton from "./PrevChapterButton";

// Descer para continuar

export default function HistorySection() {
  const fragment = useChapterFragment();
  const { hasRead } = useHasReadContext();

  return (
    <>
      <Section>
        {fragment === "cover" && <HistoryIntro />}
        {fragment === "intro" && <HistoryChapterIntro />}
        {fragment === "content" && <HistoryChapterContent />}
        {!hasRead && <HistoryNavigation />}
        {hasRead && (
          <Center flexDirection="column" gap="1rem" mt="3rem">
            <ReadAgainHistoryNavigationButton />
            <ResumeWebsiteNavigationButton />
          </Center>
        )}
      </Section>
    </>
  );
}

function ResumeWebsiteNavigationButton() {
  return (
    <Link to="#photo-gallery">
      <Button
        bg="primary.500"
        variant="solid"
        w="240px"
        rightIcon={<ArrowDown />}
      >
        Descer para continuar
      </Button>
    </Link>
  );
}

function ReadAgainHistoryNavigationButton() {
  const { readAgainChapters } = useChaptersNavigation();

  function onResumeHistoryNavigation() {
    readAgainChapters();
  }

  return (
    <Button
      borderColor="primary.500"
      variant="outline"
      onClick={onResumeHistoryNavigation}
      w="240px"
      rightIcon={<ArrowRight />}
    >
      Leia novamente
    </Button>
  );
}

function HistoryNavigation() {
  const { currentChapter } = useChapterContext();

  return (
    <Box position="absolute" bottom="4rem" zIndex={999}>
      <Flex direction="row" justify="center" gap="1rem" mb="3rem">
        {currentChapter > 0 && <PrevChapterButton />}
        <NextChapterButton />
      </Flex>
      <ChaptersBullets />
    </Box>
  );
}

function ChaptersBullets() {
  const { chapters } = useChapters();

  return (
    <Flex gap=".5rem" align="center" justify="center" width="100vw">
      {chapters.map((_, index) => {
        return <Bullet key={index} index={index} />;
      })}
    </Flex>
  );
}

function Bullet({ index, ...props }: { index: number; [x: string]: any }) {
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
