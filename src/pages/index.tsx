import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { Header } from "sections/Header";
import { Skills } from "sections/Skills";
import { About } from "sections/About";
import { WorkExperience } from "sections/WorkExperience";
import { Education } from "sections/Education";
import { ChallengesProjects } from "sections/ChallengesProjects";
import { ActionLinks } from "components/ActionLinks";
import { SideProjects } from "sections/SideProjects";

const MainPage: NextPage = () => {
  return (
    <Container
      maxW="2xl"
      minH="calc(100vh)"
      paddingX={{ base: "1.5rem", md: "0", lg: "0" }}
      paddingY={{ base: "1.5rem", md: "4rem", lg: "4rem" }}
    >
      <Head>
        <title>Juanse Calviño | Portfolio</title>
        <meta name="description" content="Portfolio de Juanse Calviño" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display={"flex"} flexDirection={"column"}>
        <Header />
        <ActionLinks />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <SideProjects />
        {/* <ChallengesProjects /> */}
      </Box>
    </Container>
  );
};

export default MainPage;
