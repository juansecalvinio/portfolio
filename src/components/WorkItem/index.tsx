import { Box, Heading, Tag, Text } from "@chakra-ui/react";
import React from "react";

export interface WorkItemProps {
  company: string;
  role: string;
  description: string;
  startTime: string;
  endTime: string;
}

interface Props {
  item: WorkItemProps;
}

export const WorkItem = ({ item }: Props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.25rem"}
      >
        <Box
          display={"flex"}
          gap={"0.25rem"}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          alignItems={"flex-start"}
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {item.company}
          </Text>
          <Tag>{item.role}</Tag>
        </Box>

        <Text fontSize={"sm"}>{item.description}</Text>
      </Box>
      <Box>
        <Text fontSize={"sm"}>{`${item.startTime} - ${item.endTime}`}</Text>
      </Box>
    </Box>
  );
};
