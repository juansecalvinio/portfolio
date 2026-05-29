import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container, Link } from "@chakra-ui/react";
import { Header } from "sections/Header";
import { Skills } from "sections/Skills";
import { About } from "sections/About";
import { WorkExperience } from "sections/WorkExperience";
import { Education } from "sections/Education";
import { Projects } from "sections/Projects";
import { ActionLinks } from "components/ActionLinks";
import { sideProjects } from "data/side-projects";
import { challengesProjects } from "data/challenges-projects";
import { skills } from "data/skills";

const TITLE = "Juanse Calviño | Software Engineer";
const DESCRIPTION =
  "Portfolio of Juanse Calviño — Software Engineer specializing in React, TypeScript and Node.js.";

const MainPage: NextPage = () => {
  return (
    <Container
      maxW="2xl"
      minH="100vh"
      paddingX={{ base: 6, md: 0 }}
      paddingY={{ base: 6, md: 16 }}
    >
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="/profile.jpeg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link
        href="#main-content"
        position="absolute"
        left="-9999px"
        _focusVisible={{
          left: 4,
          top: 4,
          zIndex: 10,
          bg: "surface.canvas",
          px: 3,
          py: 2,
          rounded: "md",
          border: "1px solid",
          borderColor: "border.emphasis",
        }}
      >
        Skip to content
      </Link>

      <Box as="main" id="main-content" display="flex" flexDirection="column">
        <Header />
        <ActionLinks />
        <About />
        <WorkExperience />
        <Education />
        <Skills skills={skills} />
        {/* <Projects title="Freelance Works" projects={sideProjects} />
        <Projects title="Side Projects / Demos" projects={challengesProjects} /> */}
      </Box>
    </Container>
  );
};

export default MainPage;
