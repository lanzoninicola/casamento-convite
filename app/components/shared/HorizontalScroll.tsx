import { Grid } from "@chakra-ui/react";

export default function HorizontalScroll({
  children,
  columnSize,
  gap,
  ...props
}: {
  children: React.ReactNode;
  columnSize: string;
  gap: number;
  [x: string]: any;
}) {
  return (
    <Grid
      w="100vw"
      gridAutoFlow="column"
      gridAutoColumns={columnSize}
      gap={gap}
      overflowX="auto"
      overscrollBehaviorX="contain"
      {...props}
    >
      {children}
    </Grid>
  );
}
