import React from "react";
import { Box, Heading, Tag, Text, useColorModeValue } from "@chakra-ui/react";

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
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      gap={"0.5rem"}
      borderTop={`1px solid`}
      borderColor={borderColor}
      paddingY={"1rem"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.5rem"}
        maxW={"500px"}
      >
        <Box
          display={"flex"}
          gap={"0.5rem"}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {item.company}
          </Text>
          <Tag colorScheme="gray">{item.role}</Tag>
        </Box>

        <Text marginTop={"0.5rem"} fontSize={"sm"} flexWrap={"wrap"}>
          {item.description}
        </Text>
      </Box>
      <Box
        marginBottom={{ base: "0.5rem", md: "0", lg: "0" }}
        order={{ base: -1, md: "initial" }}
      >
        <Text
          fontSize={"sm"}
          fontWeight={"600"}
        >{`${item.startTime} - ${item.endTime}`}</Text>
      </Box>
    </Box>
  );
};
