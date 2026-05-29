import React from "react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ToggleColor = () => {
  const { toggleColorMode } = useColorMode();
  const label = useColorModeValue("Switch to dark mode", "Switch to light mode");
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label={label}
      icon={icon}
      size="sm"
      variant="outline"
    />
  );
};
