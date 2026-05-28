import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box as="section" display="flex" flexDirection="column" mt={8}>
      <Heading fontSize={{ base: "xl", md: "2xl" }}>About</Heading>
      <Box mt={4}>
        <Text fontSize={{ base: "sm", md: "md" }} color="text.secondary">
          Software Engineer from Buenos Aires, Argentina, specializing in React,
          TypeScript, and Node.js. Focused on writing clean, maintainable code
          and staying current with the latest development technologies.
        </Text>
      </Box>
    </Box>
  );
};
