import { useEffect, useState } from "react";
import { Chapter } from "../data/chapters";

export default function useHistoryNavigationUrl({
  chapters,
  currentPart,
}: {
  chapters: Chapter[];
  currentPart: number;
}) {
  const historySectionURL = "/#our-story";
  const ceremonySectionURL = "/#ceremony";
  const [nextUrl, setNextUrl] = useState<string>(historySectionURL);
  const [prevUrl, setPrevUrl] = useState<string>(historySectionURL);

  useEffect(() => {
    handleBackNavigation();

    handleForwardNavigation();
  }, [currentPart]);

  function handleBackNavigation() {
    const prevHistoryPart = currentPart - 1;

    if (prevHistoryPart === 0) {
      setPrevUrl(historySectionURL);
    } else {
      setPrevUrl(`/history/${prevHistoryPart}`);
    }
  }

  function handleForwardNavigation() {
    const nextHistoryPart = currentPart + 1;
    if (nextHistoryPart > chapters.length - 1) {
      setNextUrl(ceremonySectionURL);
    } else {
      setNextUrl(`/history/${nextHistoryPart}`);
    }
  }

  return {
    nextUrl,
    prevUrl,
  };
}
