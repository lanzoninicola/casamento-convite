import { Flex } from "@chakra-ui/react";

export default function HistoryCardWrapper({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <Flex
      id="history-wrapper"
      direction="column"
      paddingInline="1rem"
      {...props}
    >
      {children}
    </Flex>
  );
}
