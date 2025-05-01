import { Box, Heading, Tag } from "@chakra-ui/react";
import React from "react";

const skills: { colorScheme: string; skill: string }[] = [
  {
    colorScheme: "yellow",
    skill: "JS",
  },
  {
    colorScheme: "blue",
    skill: "TypeScript",
  },
  {
    colorScheme: "blue",
    skill: "React",
  },
  {
    colorScheme: "gray",
    skill: "Next",
  },
  {
    colorScheme: "green",
    skill: "Node",
  },
  {
    colorScheme: "red",
    skill: "NestJS",
  },
  {
    colorScheme: "blue",
    skill: "Go",
  },
  {
    colorScheme: "blue",
    skill: "PostgreSQL",
  },
  {
    colorScheme: "green",
    skill: "MongoDB",
  },
  {
    colorScheme: "gray",
    skill: "Git",
  },
];

export const Skills = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Skills
      </Heading>
      <Box display={"flex"} flexWrap={"wrap"} gap={"0.5rem"} marginTop={"1rem"}>
        {/* <Tag colorScheme="yellow">Javascript</Tag>
        <Tag colorScheme="red">HTML</Tag>
        <Tag colorScheme="purple">CSS</Tag>
        <Tag colorScheme="blue">TypeScript</Tag>
        <Tag colorScheme="blue">React</Tag>
        <Tag colorScheme="gray">Next</Tag>
        <Tag colorScheme="green">NodeJS</Tag>
        <Tag colorScheme="red">NestJS</Tag>
        <Tag colorScheme="yellow">SQL</Tag>
        <Tag colorScheme="green">MongoDB</Tag>
        <Tag colorScheme="gray">Git</Tag> */}
        {skills.map((skill) => (
          <Tag colorScheme={skill.colorScheme}>{skill.skill}</Tag>
        ))}
      </Box>
    </Box>
  );
};
