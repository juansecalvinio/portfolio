import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <style jsx global>{`
        :root {
          --inter-font: ${theme.fonts.inter};
          --jetbrains-mono-font: ${theme.fonts.jetBrainsMono};
        }
      `}</style>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
