import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ProjectItem } from "components/ProjectItem";
import { Project } from "models/Project";

interface Props {
  projects: Project[];
}

export const Projects = ({ projects }: Props) => {
  return (
    <Box as="section" display="flex" flexDirection="column" mt={8}>
      <Heading fontSize={{ base: "xl", md: "2xl" }}>Projects</Heading>
      <Box mt={5} display="flex" flexDirection="column" gap={3}>
        {projects.map((project) => (
          <ProjectItem key={project.href} project={project} />
        ))}
      </Box>
    </Box>
  );
};
