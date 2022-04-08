import { Button } from "@chakra-ui/react";
import ArrowRight from "../ArrowRight";
import { PixIcon, EnvelopeIcon } from "../Icons";

function PaymentButton({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Button
      type="submit"
      fontSize="14px"
      minW={"130px"}
      bg="secondary.500"
      {...props}
    >
      {children}
    </Button>
  );
}

export function PixButton() {
  return (
    // <Link to="/invitation/gift/pix">
    <PaymentButton
      leftIcon={<PixIcon />}
      rightIcon={<ArrowRight />}
      name="type"
      value="pix"
      w="162px"
    >
      PIX
    </PaymentButton>
    // </Link>
  );
}

export function EnvelopeButton() {
  return (
    // <Link to="/invitation/gift/envelope">
    <PaymentButton
      leftIcon={<EnvelopeIcon />}
      rightIcon={<ArrowRight />}
      name="type"
      value="envelope"
    >
      ENVELOPE
    </PaymentButton>
    // </Link>
  );
}
