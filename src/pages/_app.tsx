import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import theme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="wait">
        <motion.div
          key={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
