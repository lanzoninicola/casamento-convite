import { Box } from "@chakra-ui/react";

export default function HighlightedText({
  children,
  top,
  left,
  bg,
  color,
  ...props
}: {
  children: React.ReactNode;
  top?: number;
  left?: number;
  bg: string;
  color?: string;
  [key: string]: any;
}) {
  const _top = top ? `${top}px` : `3px`;
  const _left = left ? `${left}px` : `15px`;

  return (
    <Box
      as="span"
      position="relative"
      zIndex={0}
      color={color}
      width="max-content"
    >
      <Box
        as="span"
        position="absolute"
        w="100%"
        h="100%"
        top={_top}
        left={_left}
        bg={bg}
        zIndex={-1}
      ></Box>
      {children}
    </Box>
  );
}
