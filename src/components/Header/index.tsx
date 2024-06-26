import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ToggleColor } from "components/ToggleColor";
import { HeaderContainer } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Heading size="lg">Juanse Calviño</Heading>

      <Box>
        <ToggleColor />
      </Box>
    </HeaderContainer>
  );
};
