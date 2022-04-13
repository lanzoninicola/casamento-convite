import { useEffect, useState } from "react";
import { Chapter } from "../data/chapters";

export default function useHistoryContent({
  chapters,
  currentPart,
}: {
  chapters: Chapter[];
  currentPart: number;
}) {
  const [content, setContent] = useState<Chapter | null>(null);

  useEffect(() => {
    if (currentPart) {
      setContent(chapters[currentPart]);
    }
  }, [currentPart]);

  return {
    content,
  };
}
