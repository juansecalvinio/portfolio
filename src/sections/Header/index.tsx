import React from "react";
import { Box, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { BiWorld } from "react-icons/bi";
import { Avatar } from "components/Avatar";
import { ActionLinks } from "components/ActionLinks";

export const Header = () => {
  return (
    <Box
      as="header"
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"0.25rem"}>
        <Heading size={{ base: "md", md: "xl", lg: "xl" }}>
          Juanse Calviño
        </Heading>
        <Text fontSize={{ base: "sm", md: "md", lg: "md" }}>
          Me gusta programar, y trabajo de eso.
        </Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"0.5rem"}
          alignItems={"center"}
        >
          <Icon as={BiWorld} />
          <Link
            fontSize={"14px"}
            href="https://maps.app.goo.gl/9qwCtefGnhA9h5eL9"
            target="_blank"
          >
            Mar del Plata, Argentina
          </Link>
        </Box>
        <Box marginTop={"1rem"}>
          <ActionLinks />
        </Box>
      </Box>

      <Box>
        <Avatar />
      </Box>
    </Box>
  );
};
