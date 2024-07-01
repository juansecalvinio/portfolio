import React from "react";
import { IconButton } from "@chakra-ui/react";
import { PiPrinterLight } from "react-icons/pi";

export const PrintButton = () => {
  return (
    <IconButton
      aria-label={"print"}
      icon={<PiPrinterLight />}
      onClick={() => window.print()}
      size={"sm"}
      ml={"0.5rem"}
      fontSize={"20px"}
      variant={"outline"}
    />
  );
};
