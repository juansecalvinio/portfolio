import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { Analytics } from "@vercel/analytics/react";

import theme from "theme";
import { AuroraBackground } from "components/AuroraBackground";

const pageFade = css`
  @keyframes pageFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .page-fade {
    animation: pageFadeIn 300ms ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .page-fade {
      animation: none;
    }
  }

  /* Dark theme is screen-only. Printing flips everything back to
     black-on-white so the CV doesn't waste ink or read poorly on paper. */
  @media print {
    html {
      filter: invert(1);
    }

    img,
    video {
      filter: invert(1);
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={pageFade} />
      <AuroraBackground />
      <div className="page-fade">
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
