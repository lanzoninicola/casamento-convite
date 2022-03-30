import { extendTheme } from "@chakra-ui/react";
import typography from "./foundation/typography";
import colors from "./foundation/colors";
import formComponent from "./components/form";

const overrides = {
  ...typography,
  colors,
  components: {
    Form: formComponent,
  },
};

export const theme = extendTheme(overrides);
