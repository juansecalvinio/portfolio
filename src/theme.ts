import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: `${inter.style.fontFamily}, sans-serif`,
    body: `${jetBrainsMono.style.fontFamily}, sans-serif`,
    inter: `${inter.style.fontFamily}, sans-serif`,
    jetBrainsMono: `${jetBrainsMono.style.fontFamily}, sans-serif`,
  },
};
const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      // bg: props.colorMode === "dark" ? "black" : "white",
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
