import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        About
      </Heading>
      <Box marginTop={"1rem"}>
        <Text fontSize={{ base: "sm", md: "md", lg: "md" }}>
          Software Engineer from Buenos Aires, Argentina, specializing in React,
          TypeScript, and Node.js. Focused on writing clean, maintainable code
          and staying current with the latest development technologies.
        </Text>
      </Box>
    </Box>
  );
};
