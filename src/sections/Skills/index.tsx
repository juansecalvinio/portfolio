import { Box, Heading, Tag } from "@chakra-ui/react";
import React from "react";

export const Skills = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Skills
      </Heading>
      <Box display={"flex"} flexWrap={"wrap"} gap={"0.5rem"} marginTop={"1rem"}>
        <Tag colorScheme="yellow">Javascript</Tag>
        <Tag colorScheme="red">HTML</Tag>
        <Tag colorScheme="purple">CSS</Tag>
        <Tag colorScheme="blue">TypeScript</Tag>
        <Tag colorScheme="blue">React</Tag>
        <Tag colorScheme="gray">Next</Tag>
        <Tag colorScheme="green">NodeJS</Tag>
        <Tag colorScheme="red">NestJS</Tag>
        <Tag colorScheme="yellow">SQL</Tag>
        <Tag colorScheme="green">MongoDB</Tag>
        <Tag colorScheme="gray">Git</Tag>
      </Box>
    </Box>
  );
};
