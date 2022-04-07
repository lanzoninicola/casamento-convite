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
      minH={h || "100vh"}
      position="relative"
      scrollSnapAlign="start"
      {...props}
    >
      {children}
    </Container>
  );
}
