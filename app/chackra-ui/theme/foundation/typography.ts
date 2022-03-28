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
    heading:
      'Source Serif Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: 'Source Serif Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
};

export default typography;
