import React from "react";
import { Avatar as ChakraAvatar, Box } from "@chakra-ui/react";

export const Avatar = () => {
  return (
    <Box
      width={{ base: "80px", md: "120px", lg: "150px" }}
      height={{ base: "80px", md: "120px", lg: "150px" }}
      maxWidth="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <ChakraAvatar
        size="full"
        name="Juanse Calviño"
        // src="https://media.licdn.com/dms/image/D4D03AQE77cwoXQfEQA/profile-displayphoto-shrink_800_800/0/1711400140726?e=1724889600&v=beta&t=qmE-TbS_QTYOwraCq-tNpcolK5QTVUG3ELQ-ahEeCxY"
        // src="https://avatars.githubusercontent.com/u/26818515?v=4"
        src="/profile.jpeg"
      />
    </Box>
  );
};
