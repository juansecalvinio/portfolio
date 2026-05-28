import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ProjectCard } from "components/ProjectCard";
import { Project } from "models/Project";

interface Props {
  title: string;
  projects: Project[];
}

export const Projects = ({ title, projects }: Props) => {
  return (
    <Box as="section" display="flex" flexDirection="column" mt={8}>
      <Heading fontSize={{ base: "xl", md: "2xl" }}>{title}</Heading>
      <Box
        display="flex"
        alignItems="stretch"
        justifyContent="flex-start"
        flexDirection="row"
        flexWrap="wrap"
        gap={4}
        mt={4}
      >
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </Box>
    </Box>
  );
};
