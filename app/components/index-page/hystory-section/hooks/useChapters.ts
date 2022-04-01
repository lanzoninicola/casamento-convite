import { Chapter, chapters } from "../data/chapters";

export default function useChapters(): {
  chaptersLength: number;
  chapters: Chapter[];
} {
  const chaptersLength = chapters.length;

  return {
    chaptersLength,
    chapters,
  };
}
