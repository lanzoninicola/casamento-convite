import { Chapter, chapters } from "../chapters";

export default function useChapters(): {
  chaptersQuantity: number;
  chapters: Chapter[];
} {
  const chaptersQuantity = chapters.length;

  return {
    chaptersQuantity,
    chapters,
  };
}
