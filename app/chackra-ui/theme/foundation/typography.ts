import { theme as chakraTheme } from "@chakra-ui/react";

const typography = {
  fontWeights: {
    ...chakraTheme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fonts: {
    ...chakraTheme.fonts,
    heading: `Source Serif Pro, ${chakraTheme.fonts.heading}`,
    body: `Karla, ${chakraTheme.fonts.body}`,
  },
};

export default typography;
