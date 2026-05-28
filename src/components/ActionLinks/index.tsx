import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ToggleColor } from "components/ToggleColor";
import { PrintButton } from "components/PrintButton";

const links = [
  {
    name: "Email",
    href: "mailto:j.s.calvinio@gmail.com",
    icon: <CiMail />,
  },
  {
    name: "GitHub",
    href: "https://github.com/juansecalvinio",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/juansecalvinio/",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    href: "https://x.com/juansecalvinio",
    icon: <FaXTwitter />,
  },
];

export const ActionLinks = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap={2}
      mt={{ base: 4, md: 6 }}
    >
      <ToggleColor />

      {links.map((item) => (
        <IconButton
          key={item.name}
          as="a"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          icon={item.icon}
          size="sm"
          variant="outline"
          fontSize="20px"
        />
      ))}

      <PrintButton />
    </Box>
  );
};
