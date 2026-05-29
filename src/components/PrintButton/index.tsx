import React from "react";
import { IconButton } from "@chakra-ui/react";
import { PiPrinterLight } from "react-icons/pi";

export const PrintButton = () => {
  return (
    <IconButton
      aria-label="Print this page"
      icon={<PiPrinterLight />}
      onClick={() => window.print()}
      size="sm"
      fontSize="20px"
      variant="outline"
    />
  );
};
