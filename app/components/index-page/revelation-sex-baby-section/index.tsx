import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import useRemixLocalStorage from "~/components/shared/hooks/useRemixLocalStorage";
import Section from "~/components/shared/Section";
import { REVELATION_GAME_TYPE_ANIMATION_OVER_LOCAL_STORAGE_KEY } from "~/modules/invitations/constants";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

import RevelationGame from "./components/RevelationGame";
import RevelationHeading from "./components/RevelationHeading";

export default function RevelationSexBabySection() {
  const [isTypingAnimationOver, setIsTypingAnimationOver] =
    useRemixLocalStorage<boolean>(
      REVELATION_GAME_TYPE_ANIMATION_OVER_LOCAL_STORAGE_KEY,
      false
    );

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <Section id="revelation" bg="gray.50" pt="2rem">
        <Center h="100%">
          {inView && !isTypingAnimationOver && (
            <RevelationHeading onOver={() => setIsTypingAnimationOver(true)} />
          )}
          {isTypingAnimationOver && <RevelationGame />}
        </Center>
      </Section>
    </div>
  );
}
