import { Link } from "remix";
import ArrowRight from "~/components/shared/ArrowRight";

import BaseChapterButton from "./BaseChapterButton";

export default function NextChapterButton({ nextUrl }: { nextUrl: string }) {
  return (
    <Link to={nextUrl}>
      <BaseChapterButton>
        <ArrowRight />
      </BaseChapterButton>
    </Link>
  );
}
