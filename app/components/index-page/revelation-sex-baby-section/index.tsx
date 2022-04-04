import { Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SafeArea from "~/components/shared/SafeArea";
import Section from "~/components/shared/Section";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

import Typewriter from "typewriter-effect";

import RevelationGame from "./components/RevelationGame";
import Slides from "./components/Slides";
import BaseHeading from "~/components/shared/BaseHeadings";

export default function RevelationSexBabySection({
  formState,
  actionData,
}: {
  formState: RemixFormState;
  actionData: any;
}) {
  const [isIntroductionOver, setIsIntroductionOver] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    // delay: 1000,
  });

  return (
    <div ref={ref}>
      <Section id="revelation-sex-baby">
        <SafeArea>
          {inView && !isIntroductionOver && (
            <Introduction onOver={setIsIntroductionOver} />
          )}
          {isIntroductionOver && (
            <RevelationGame actionData={actionData} formState={formState} />
          )}
        </SafeArea>
      </Section>
    </div>
  );
}

function Introduction({ onOver }: { onOver: Function }) {
  return (
    <Center h="100%" paddingInline="2rem">
      <BaseHeading textAlign="center" lineHeight="1.2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString("È não é so isso!")
              .pauseFor(200)
              .deleteAll()
              .typeString("Um bebezinho está chegando")
              .pauseFor(500)
              .deleteAll()
              .callFunction(() => {
                onOver(true);
              })
              .start();
          }}
        />
      </BaseHeading>
    </Center>
  );
}
