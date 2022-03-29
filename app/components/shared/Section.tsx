import { Container } from "@chakra-ui/react";

export default function Section({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <Container
      as="section"
      w="100vw"
      h="100vh"
      position="relative"
      {...props}
      paddingInline="0"
    >
      {children}
    </Container>
  );
}
