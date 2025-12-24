import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { EducationItem } from "components/EducationItem";
import { educations } from "data/educations";

export const Education = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Education
      </Heading>
      <Box
        marginTop={"1.25rem"}
        display={"flex"}
        flexDirection={"column"}
        gap="0.75rem"
      >
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
