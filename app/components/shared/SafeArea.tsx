import { Box } from "@chakra-ui/react";
import settings from "~/modules/settings";

export default function SafeArea({
  children,
  top,
  bottom,
  ignoreHeader = false,
  ...props
}: {
  children: React.ReactNode;
  top?: number;
  bottom?: number;
  ignoreHeader?: boolean;
  [key: string]: any;
}) {
  const paddingTop = ignoreHeader ? 0 : top || settings.app.styles.headerHeight;

  return (
    <Box
      className="safe-area"
      h="100%"
      maxH={settings.app.styles.viewport.mobile.maxHeight}
      pt={paddingTop}
      pb={bottom}
      {...props}
    >
      {children}
    </Box>
  );
}
