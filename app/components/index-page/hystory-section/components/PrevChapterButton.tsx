import { Image } from "@chakra-ui/react";

import BaseChapterButton from "./BaseChapterButton";
import useChaptersNavigation from "../hooks/useChaptersNavigation";

export default function PrevChapterButton() {
  const { prevChapter } = useChaptersNavigation();

  function handleClick() {
    prevChapter();
  }

  return (
    <BaseChapterButton onClick={handleClick}>
      <Image src="/images/arrow-left.svg" />
    </BaseChapterButton>
  );
}
