import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: `${inter.style.fontFamily}, sans-serif`,
  body: `${inter.style.fontFamily}, sans-serif`,
  // Signature: monospace reserved for data only (dates, tags, location).
  mono: `${jetBrainsMono.style.fontFamily}, monospace`,
};

// Token architecture: a small set of primitives. Same hue, shift only lightness.
// Borders-only depth strategy — no decorative shadows.
const semanticTokens = {
  colors: {
    "text.primary": { default: "gray.800", _dark: "gray.100" },
    "text.secondary": { default: "gray.600", _dark: "gray.400" },
    "text.muted": { default: "gray.500", _dark: "gray.500" },
    "border.subtle": { default: "blackAlpha.200", _dark: "whiteAlpha.200" },
    "border.emphasis": { default: "blackAlpha.300", _dark: "whiteAlpha.300" },
    "surface.canvas": { default: "white", _dark: "gray.900" },
    accent: { default: "teal.600", _dark: "teal.300" },
    "accent.hover": { default: "teal.700", _dark: "teal.200" },
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: "surface.canvas",
      color: "text.primary",
    },
    "*::selection": {
      bg: props.colorMode === "dark" ? "teal.700" : "teal.100",
    },
  }),
};

const components = {
  Heading: {
    baseStyle: {
      color: "text.primary",
      letterSpacing: "-0.02em",
      fontWeight: "700",
    },
  },
  Link: {
    baseStyle: {
      color: "accent",
      transitionProperty: "color",
      transitionDuration: "150ms",
      _hover: { color: "accent.hover", textDecoration: "underline" },
    },
  },
};

const theme = extendTheme({
  config,
  fonts,
  semanticTokens,
  styles,
  components,
});

export default theme;
