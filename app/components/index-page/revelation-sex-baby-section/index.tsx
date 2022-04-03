import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SafeArea from "~/components/shared/SafeArea";
import Section from "~/components/shared/Section";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

import RevelationGame from "./components/RevelationGame";
import Slides from "./components/Slides";

export default function RevelationSexBabySection({
  formState,
  actionData,
}: {
  formState: RemixFormState;
  actionData: any;
}) {
  const [isPresentationFinished, setPresentationFinished] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
    // delay: 1000,
  });

  function onPresentationOver() {
    setPresentationFinished(true);
  }

  return (
    <div ref={ref}>
      <Section id="revelation-sex-baby">
        <SafeArea>
          {inView && !isPresentationFinished && (
            <>
              <Slides onOver={onPresentationOver} />
            </>
          )}
          {isPresentationFinished && (
            <RevelationGame actionData={actionData} formState={formState} />
          )}
        </SafeArea>
      </Section>
    </div>
  );
}
