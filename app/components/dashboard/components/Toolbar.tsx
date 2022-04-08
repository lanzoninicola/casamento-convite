import { HStack } from "@chakra-ui/react";

export default function Toolbar({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <HStack
      className="toolbar"
      w="100%"
      mb="1rem"
      paddingInline=".5rem"
      {...props}
    >
      {children}
    </HStack>
  );
}
