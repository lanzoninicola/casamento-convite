import { Center } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import BaseHeading from "~/components/shared/BaseHeadings";

export default function RevelationHeading({ onOver }: { onOver: Function }) {
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
