import { Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import BaseHeading from "~/components/shared/BaseHeadings";

export default function Slides({ onOver }: { onOver: Function }) {
  const [slide, setSlide] = useState(0);
  const [scale, setScale] = useState<number>(0);

  const content = ["È não é so isso", "Um bebezinho está chegando"];
  const MAX_SLIDE = content.length - 1;
  const TIME_BETWEEN_SLIDES = 2700;
  const SCALE_DELAY = 500;
  const SCALE_TRANSITION_DURATION = 500;
  const DELAY_END_OF_SLIDE = 500;

  function onPresentationOver() {
    onOver(true);
  }

  useEffect(() => {
    let timeout: any = null;

    timeout = setTimeout(() => {
      onPresentationOver();
    }, TIME_BETWEEN_SLIDES * content.length + DELAY_END_OF_SLIDE);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    let interval: any = null;

    interval = setInterval(() => {
      const nextSlide = slide + 1;
      setSlide(nextSlide);
    }, TIME_BETWEEN_SLIDES);

    if (slide === MAX_SLIDE) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  useEffect(() => {
    const scaleTimeout = setTimeout(() => {
      setScale(1);
    }, SCALE_DELAY);

    const dropTimeout = setTimeout(() => {
      setScale(0);
    }, TIME_BETWEEN_SLIDES - SCALE_TRANSITION_DURATION);

    return () => {
      clearTimeout(scaleTimeout);
      clearTimeout(dropTimeout);
    };
  }, [slide]);

  return (
    <>
      <Center
        h="100%"
        className="slide1"
        background="transparent"
        p="1rem"
        transform={`scale(${scale})`}
        transition={`all ${SCALE_TRANSITION_DURATION}ms ease-in`}
        bg="primary.500"
        borderRadius="5px"
      >
        <BaseHeading textAlign="center">{content[slide]}</BaseHeading>
      </Center>
    </>
  );
}
