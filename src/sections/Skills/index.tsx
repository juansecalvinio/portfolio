import React from "react";
import { Box, Heading, Tag } from "@chakra-ui/react";
import { skills } from "./skills";

export const Skills = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Skills
      </Heading>
      <Box display={"flex"} flexWrap={"wrap"} gap={"0.5rem"} marginTop={"1rem"}>
        {skills.map((skill) => (
          <Tag key={skill.skill} colorScheme={skill.colorScheme}>
            {skill.skill}
          </Tag>
        ))}
      </Box>
    </Box>
  );
};
