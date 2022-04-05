import { Button } from "@chakra-ui/react";
import { Link } from "remix";
import ArrowRight from "./ArrowRight";

export function BackToHomeButton({
  url,
  ...props
}: {
  url: string;
  [key: string]: any;
}) {
  //   const pulseAnimationCSS = usePulseAnimation(211, 171, 158);

  return (
    <Link to={url}>
      <Button
        bg="secondary.500"
        rightIcon={<ArrowRight />}
        // animation={pulseAnimationCSS}
        textTransform="uppercase"
        letterSpacing="1.2px"
        marginBlock="1rem"
      >
        PÁGINA INICIAL
      </Button>
    </Link>
  );
}
