import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ProjectCard } from "components/ProjectCard";
import { challengesProjects } from "./challenges-projects";

export const ChallengesProjects = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Technical Demos
      </Heading>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={"1rem"}
        mt={"1rem"}
      >
        {challengesProjects.map((project, index) => (
          <ProjectCard key={index} id={index} project={project} />
        ))}
      </Box>
    </Box>
  );
};
