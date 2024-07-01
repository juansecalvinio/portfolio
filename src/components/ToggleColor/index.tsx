import React from "react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ToggleColor = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label={useColorModeValue("Modo oscuro", "Modo claro")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      size={"sm"}
      variant={"outline"}
    />
  );
};
