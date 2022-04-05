import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Section from "~/components/shared/Section";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

import RevelationGame from "./components/RevelationGame";
import RevelationHeading from "./components/RevelationHeading";

export default function RevelationSexBabySection() {
  const [isTypingAnimationOver, setIsTypingAnimationOver] =
    useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    // delay: 1000,
  });

  return (
    <div ref={ref}>
      <Section id="revelation" bg="gray.50" pt="2rem">
        <Center h="100%">
          {inView && !isTypingAnimationOver && (
            <RevelationHeading onOver={setIsTypingAnimationOver} />
          )}
          {isTypingAnimationOver && <RevelationGame />}
        </Center>
      </Section>
    </div>
  );
}
