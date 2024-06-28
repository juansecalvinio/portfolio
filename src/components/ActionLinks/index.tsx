import React from "react";
import { Box, Icon, IconButton, Link } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ToggleColor } from "components/ToggleColor";
import { PrintButton } from "components/PrintButton";

const links = [
  {
    name: "mail",
    href: "mailto:j.s.calvinio@gmail.com",
    icon: <CiMail />,
  },
  {
    name: "github",
    href: "https://github.com/juansecalvinio",
    icon: <FaGithub />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/juansecalvinio/",
    icon: <FaLinkedin />,
  },
  {
    name: "twitter",
    href: "https://x.com/juansecalvinio",
    icon: <FaXTwitter />,
  },
];

export const ActionLinks = () => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
      <ToggleColor />

      {links.map((item) => (
        <Link key={item.name} href={item.href} target="_blank">
          <IconButton
            aria-label={item.name}
            icon={item.icon}
            size={"sm"}
            ml={"0.5rem"}
          />
        </Link>
      ))}

      <PrintButton />
    </Box>
  );
};
