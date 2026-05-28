import React from "react";
import { Box, Tag, Text } from "@chakra-ui/react";

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
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="flex-start"
      justifyContent="space-between"
      gap={2}
      borderTop="1px solid"
      borderColor="border.subtle"
      paddingY={4}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={2}
        maxW="500px"
        minW={0}
      >
        <Box
          display="flex"
          gap={2}
          flexDirection={{ base: "column", md: "row" }}
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
        >
          <Text fontWeight="bold" fontSize="md">
            {item.company}
          </Text>
          <Tag colorScheme="gray" fontFamily="mono" flexShrink={0}>
            {item.role}
          </Tag>
        </Box>

        <Text mt={2} fontSize="sm" color="text.secondary">
          {item.description}
        </Text>
      </Box>
      <Box
        mb={{ base: 2, md: 0 }}
        order={{ base: -1, md: "initial" }}
        flexShrink={0}
      >
        <Text
          fontFamily="mono"
          fontSize="sm"
          color="text.muted"
          sx={{ fontVariantNumeric: "tabular-nums" }}
        >
          {`${item.startTime} - ${item.endTime}`}
        </Text>
      </Box>
    </Box>
  );
};
