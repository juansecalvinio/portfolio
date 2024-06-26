import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import { Header } from "components/Header";

import theme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="2xl" h="calc(100vh)" paddingY={"4rem"}>
        <Head>
          <title>Juanse Calviño | Portfolio</title>
          <meta name="description" content="Cancionero de Emanuel" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
