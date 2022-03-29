import { Heading } from "@chakra-ui/react";

export default function BaseHeading({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <Heading color="text.500" fontWeight="400" lineHeight="1" {...props}>
      {children}
    </Heading>
  );
}
