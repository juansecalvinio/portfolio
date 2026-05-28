import { Box, Text } from "@chakra-ui/react";
import { Education } from "models/Education";
import React from "react";

interface Props {
  education: Education;
}

export const EducationItem = ({ education }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="flex-start"
      justifyContent="space-between"
      gap={1}
      borderTop="1px solid"
      borderColor="border.subtle"
      paddingY={4}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={1}
        minW={0}
      >
        <Text fontWeight="bold" fontSize="md">
          {education.place}
        </Text>
        <Text fontSize="sm" color="text.secondary">
          {education.career}
        </Text>
      </Box>
      <Box flexShrink={0}>
        <Text
          fontFamily="mono"
          fontSize="sm"
          color="text.muted"
          sx={{ fontVariantNumeric: "tabular-nums" }}
        >
          {`${education.startTime} - ${education.endTime}`}
        </Text>
      </Box>
    </Box>
  );
};
