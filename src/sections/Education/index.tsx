import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { EducationItem } from "components/EducationItem";
import { educations } from "data/educations";

export const Education = () => {
  return (
    <Box as="section" display="flex" flexDirection="column" mt={8}>
      <Heading fontSize={{ base: "xl", md: "2xl" }}>Education</Heading>
      <Box mt={5} display="flex" flexDirection="column" gap={3}>
        {educations.map((education) => (
          <EducationItem
            key={`${education.place}-${education.career}`}
            education={education}
          />
        ))}
      </Box>
    </Box>
  );
};
