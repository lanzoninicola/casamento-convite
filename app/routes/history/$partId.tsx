import { Box, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LoaderFunction, useLoaderData, useParams } from "remix";
import ChaptersBullets from "~/components/index-page/hystory-section/components/ChaptersBullets";
import NextChapterButton from "~/components/index-page/hystory-section/components/NextChapterButton";
import PrevChapterButton from "~/components/index-page/hystory-section/components/PrevChapterButton";
import {
  Chapter,
  chapters,
} from "~/components/index-page/hystory-section/data/chapters";
import HistoryChapterContent from "~/components/index-page/hystory-section/HistoryChapterContent";
import HistoryChapterIntro from "~/components/index-page/hystory-section/HistoryChapterIntro";
import useHistoryContent from "~/components/index-page/hystory-section/hooks/useHistoryContent";
import useHistoryNavigationUrl from "~/components/index-page/hystory-section/hooks/useHistoryNavigation";
import Section from "~/components/shared/Section";

export interface LoaderData {
  chapters: Chapter[];
}

export const loader: LoaderFunction = async () => {
  return { chapters };
};

export default function PartId() {
  const { chapters }: LoaderData = useLoaderData();
  const { partId } = useParams();

  const currentPart = partId ? parseInt(partId, 10) : 1;

  const { content } = useHistoryContent({ chapters, currentPart });
  const { nextUrl, prevUrl } = useHistoryNavigationUrl({
    chapters,
    currentPart,
  });

  return (
    <Section id={`our-story-${currentPart}`} p={0}>
      <Grid
        className="history-wrapper"
        minH="100vh"
        gridTemplateRows="1fr auto"
      >
        {content && content.type === "intro" && (
          <HistoryChapterIntro
            textMonth={content.textMonth}
            textYear={content.textYear}
            title={content.title}
          />
        )}
        {content && content.type === "content" && (
          <HistoryChapterContent
            title={content.title}
            text={content.text}
            image={content.image}
          />
        )}
        <Box zIndex={3}>
          <Flex direction="row" justify="center" gap="1rem" mb="1.5rem">
            {partId && currentPart > 0 && (
              <PrevChapterButton prevUrl={prevUrl} />
            )}
            <NextChapterButton nextUrl={nextUrl} />
          </Flex>
          <ChaptersBullets />
        </Box>
      </Grid>
    </Section>
  );
}
