import { Box, Text } from "@chakra-ui/react";
import React from "react";

export interface EducationItemProps {
  place: string;
  career: string;
  startTime: string;
  endTime: string;
}

interface Props {
  item: EducationItemProps;
}

export const EducationItem = ({ item }: Props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      gap={"0.25rem"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.25rem"}
      >
        <Text fontWeight={"bold"} fontSize={"md"}>
          {item.place}
        </Text>
        <Text fontSize={"sm"}>{item.career}</Text>
      </Box>
      <Box>
        <Text
          fontSize={"sm"}
          fontWeight={"600"}
        >{`${item.startTime} - ${item.endTime}`}</Text>
      </Box>
    </Box>
  );
};
