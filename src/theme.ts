import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `${spaceGrotesk.style.fontFamily}, sans-serif`,
  body: `${ibmPlexSans.style.fontFamily}, sans-serif`,
  // Signature: monospace reserved for data only (dates, tags, location).
  mono: `${jetBrainsMono.style.fontFamily}, monospace`,
};

// Monochrome, single fixed dark theme — no hue, only lightness steps.
const semanticTokens = {
  colors: {
    "text.primary": { default: "gray.100" },
    "text.secondary": { default: "gray.400" },
    "text.muted": { default: "gray.500" },
    "text.link": { default: "gray.300" },
    "text.link.hover": { default: "white" },
    "border.subtle": { default: "whiteAlpha.200" },
    "border.emphasis": { default: "whiteAlpha.300" },
    "surface.canvas": { default: "#09090b" },
  },
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: "surface.canvas",
      color: "text.primary",
    },
    "*::selection": {
      bg: "whiteAlpha.300",
    },
  },
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
      color: "text.link",
      textDecoration: "underline",
      textUnderlineOffset: "2px",
      transitionProperty: "color",
      transitionDuration: "150ms",
      _hover: { color: "text.link.hover" },
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
