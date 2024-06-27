import { Box, Heading, Tag } from "@chakra-ui/react";
import React from "react";

export const Skills = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Heading size={"md"}>Skills</Heading>
      <Box display={"flex"} gap={"0.5rem"} marginTop={"1rem"}>
        <Tag>TypeScript</Tag>
        <Tag>React</Tag>
        <Tag>NodeJS</Tag>
        <Tag>SQL</Tag>
      </Box>
    </Box>
  );
};
