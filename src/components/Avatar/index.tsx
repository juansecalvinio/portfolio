import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const Avatar = () => {
  return (
    <Box
      position="relative"
      flexShrink={0}
      width={{ base: "80px", md: "120px", lg: "150px" }}
      height={{ base: "80px", md: "120px", lg: "150px" }}
      rounded="full"
      overflow="hidden"
      borderWidth="1px"
      borderColor="border.subtle"
    >
      <Image
        src="/profile.jpeg"
        alt="Juanse Calviño"
        fill
        sizes="(max-width: 48em) 80px, (max-width: 62em) 120px, 150px"
        priority
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};
