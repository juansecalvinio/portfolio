import React from "react";
import { Box, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { BiWorld } from "react-icons/bi";
import { Avatar } from "components/Avatar";

export const Header = () => {
  return (
    <Box
      as="header"
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        gap={"2rem"}
      >
        <Box>
          <Heading fontSize={{ base: "25px", md: "28px", lg: "28px" }}>
            Juanse Calviño
          </Heading>
          <Text fontSize={{ base: "lg", md: "lg", lg: "lg" }}>
            Software Engineer
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"0.5rem"}
          alignItems={"center"}
          // mt={"1rem"}
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
      </Box>

      <Box>
        <Avatar />
      </Box>
    </Box>
  );
};
