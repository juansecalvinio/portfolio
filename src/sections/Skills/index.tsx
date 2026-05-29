import React from "react";
import { Box, Heading, Tag } from "@chakra-ui/react";
import { Skill } from "models/Skill";

interface Props {
  skills: Skill[];
}

export const Skills = ({ skills }: Props) => {
  return (
    <Box as="section" display="flex" flexDirection="column" mt={8}>
      <Heading fontSize={{ base: "xl", md: "2xl" }}>Skills</Heading>
      <Box display="flex" flexWrap="wrap" gap={2} mt={4}>
        {skills.map((skill) => (
          <Tag key={skill.skill} colorScheme={skill.colorScheme} fontFamily="mono">
            {skill.skill}
          </Tag>
        ))}
      </Box>
    </Box>
  );
};
