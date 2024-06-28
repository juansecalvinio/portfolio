import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { Header } from "sections/Header";
import { Skills } from "sections/Skills";
import { About } from "sections/About";
import { WorkExperience } from "sections/WorkExperience";
import { Education } from "sections/Education";
import { Projects } from "sections/Projects";

const MainPage: NextPage = () => {
  return (
    <Container
      maxW="2xl"
      minH="calc(100vh)"
      paddingX={{ base: "1.75rem", md: "0", lg: "0" }}
      paddingY={{ base: "1.75rem", md: "4rem", lg: "4rem" }}
    >
      <Head>
        <title>Juanse Calviño | Portfolio</title>
        <meta name="description" content="Portfolio de Juanse Calviño" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display={"flex"} flexDirection={"column"} gap={"3rem"}>
        <Header />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
      </Box>
    </Container>
  );
};

export default MainPage;
