import { Button, Text, VStack } from "@chakra-ui/react";
import { Link } from "remix";
import ArrowRight from "~/components/shared/ArrowRight";
import BaseHeading from "~/components/shared/BaseHeadings";
import usePulseAnimation from "~/components/shared/hooks/usePulseAnimation";

export default function Gosh() {
  return (
    <VStack spacing={0}>
      <BaseHeading fontSize="38px" fontWeight="700" textAlign="center">
        Poxa!! Que pena...
      </BaseHeading>
      <Text
        fontSize="14px"
        textAlign="center"
        lineHeight={1.1}
        paddingInline="2rem"
        width="40ch"
      >
        Não importa, obrigado de qualquer forma pela resposta e esperamos que
        você possa mudar de idéia nos próximos dias...
      </Text>
    </VStack>
  );
}

function NextButton() {
  const pulseAnimationCSS = usePulseAnimation(211, 171, 158);

  return (
    <Link to="/#photo-gallery">
      <Button
        bg="secondary.500"
        rightIcon={<ArrowRight />}
        animation={pulseAnimationCSS}
        textTransform="uppercase"
        letterSpacing="1.2px"
        marginBlock="1rem"
      >
        Prosseguir
      </Button>
    </Link>
  );
}
