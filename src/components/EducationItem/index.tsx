import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Education } from "models/Education";
import React from "react";

interface Props {
  education: Education;
}

export const EducationItem = ({ education }: Props) => {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      gap={"0.25rem"}
      borderTop={`1px solid`}
      borderColor={borderColor}
      paddingY={"1rem"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.25rem"}
      >
        <Text fontWeight={"bold"} fontSize={"md"}>
          {education.place}
        </Text>
        <Text fontSize={"sm"}>{education.career}</Text>
      </Box>
      <Box>
        <Text
          fontSize={"sm"}
          fontWeight={"600"}
        >{`${education.startTime} - ${education.endTime}`}</Text>
      </Box>
    </Box>
  );
};
