import React from "react";
import { Box, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { BiWorld } from "react-icons/bi";
import { Avatar } from "components/Avatar";

export const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      gap={4}
      width="100%"
    >
      <Box display="flex" flexDirection="column" gap={8} minW={0}>
        <Box>
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }}>
            Juanse Calviño
          </Heading>
          <Text fontSize="lg" color="text.secondary">
            Software Engineer
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" gap={2} alignItems="center">
          <Icon as={BiWorld} aria-hidden color="text.muted" />
          <Link
            fontFamily="mono"
            fontSize="sm"
            color="text.secondary"
            href="https://maps.app.goo.gl/9qwCtefGnhA9h5eL9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mar del Plata, Argentina
          </Link>
        </Box>
      </Box>

      <Avatar />
    </Box>
  );
};
