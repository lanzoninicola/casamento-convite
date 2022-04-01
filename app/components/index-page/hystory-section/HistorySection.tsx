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
import NextChapterButton from "./components/NextChapterButton";
import PrevChapterButton from "./components/PrevChapterButton";
import HistoryNavigation from "./HistoryNavigation";

// Descer para continuar

export default function HistorySection() {
  const fragment = useChapterFragment();
  const { hasRead } = useHasReadContext();

  return (
    <>
      <Section id="our-story">
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
