import { Container } from "@chakra-ui/react";

export default function Section({
  children,
  h,
  ...props
}: {
  children: React.ReactNode;
  h?: string;
  [x: string]: any;
}) {
  return (
    <Container
      as="section"
      w="100vw"
      h={h || "100vh"}
      position="relative"
      {...props}
      paddingInline="0"
      scrollSnapAlign="start"
    >
      {children}
    </Container>
  );
}
