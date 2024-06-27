import React from "react";
import { Avatar as ChakraAvatar, WrapItem } from "@chakra-ui/react";

export const Avatar = () => {
  return (
    <WrapItem>
      <ChakraAvatar
        size={{ base: "xl", md: "2xl", lg: "2xl" }}
        name="Juanse Calviño"
        src="https://avatars.githubusercontent.com/u/26818515?v=4"
      />
    </WrapItem>
  );
};
