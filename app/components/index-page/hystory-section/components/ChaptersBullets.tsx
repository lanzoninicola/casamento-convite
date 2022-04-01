import { Flex } from "@chakra-ui/react";
import useChapters from "../hooks/useChapters";
import Bullet from "./Bullet";

export default function ChaptersBullets() {
  const { chapters } = useChapters();

  return (
    <Flex gap=".5rem" align="center" justify="center" width="100vw">
      {chapters.map((_, index) => {
        return <Bullet key={index} index={index} />;
      })}
    </Flex>
  );
}
