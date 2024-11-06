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
          My motivation in technology goes beyond the code; I'm drawn to the
          potential for impact through development. I'm constantly seeking to
          learn and evolve, staying up-to-date with the latest trends and best
          practices in software development. My goal is not just to solve
          technical problems but also to make a meaningful contribution to
          projects that make a difference.
        </Text>
      </Box>
    </Box>
  );
};
