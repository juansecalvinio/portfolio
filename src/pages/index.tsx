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
      h="calc(100vh)"
      paddingX={"0"}
      paddingY={"4rem"}
      paddingBottom={"1rem"}
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
        <Projects />
      </Box>
    </Container>
  );
};

export default MainPage;
