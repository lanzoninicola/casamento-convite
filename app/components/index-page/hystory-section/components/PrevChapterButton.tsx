import { Link } from "remix";
import ArrowLeft from "~/components/shared/ArrowLeft";

import BaseChapterButton from "./BaseChapterButton";

export default function PrevChapterButton({ prevUrl }: { prevUrl: string }) {
  return (
    <Link to={prevUrl}>
      <BaseChapterButton>
        <ArrowLeft />
      </BaseChapterButton>
    </Link>
  );
}
