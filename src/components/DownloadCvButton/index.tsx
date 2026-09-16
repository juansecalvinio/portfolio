import React from "react";
import { IconButton } from "@chakra-ui/react";
import { PiFilePdf } from "react-icons/pi";

export const DownloadCvButton = () => {
  return (
    <IconButton
      as="a"
      href="/juanse-calvino-cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View CV (PDF)"
      icon={<PiFilePdf />}
      size="sm"
      fontSize="20px"
      variant="outline"
    />
  );
};
