import { Image } from "@chakra-ui/react";

import BaseChapterButton from "./BaseChapterButton";
import useChaptersNavigation from "../hooks/useChaptersNavigation";
import ArrowRight from "~/components/shared/ArrowRight";

export default function NextChapterButton() {
  const { nextChapter } = useChaptersNavigation();

  function handleClick() {
    nextChapter();
  }

  return (
    <BaseChapterButton onClick={handleClick}>
      <ArrowRight />
    </BaseChapterButton>
  );
}
