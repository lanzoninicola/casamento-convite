import { Image } from "@chakra-ui/react";

import BaseChapterButton from "./BaseChapterButton";
import useChaptersNavigation from "../hooks/useChaptersNavigation";

export default function NextChapterButton() {
  const { nextChapter } = useChaptersNavigation();

  function handleClick() {
    nextChapter();
  }

  return (
    <BaseChapterButton onClick={handleClick}>
      <Image src="/images/arrow-right.svg" />
    </BaseChapterButton>
  );
}
