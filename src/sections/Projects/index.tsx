import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Projects = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Projects
      </Heading>
      <Box></Box>
    </Box>
  );
};
