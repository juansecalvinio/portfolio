import React from "react";
import { Avatar as ChakraAvatar, WrapItem } from "@chakra-ui/react";

export const Avatar = () => {
  return (
    <WrapItem>
      <ChakraAvatar
        size={{ base: "xl", md: "2xl", lg: "2xl" }}
        maxW={"150px"}
        name="Juanse Calviño"
        src="https://media.licdn.com/dms/image/D4D03AQE77cwoXQfEQA/profile-displayphoto-shrink_800_800/0/1711400140726?e=1724889600&v=beta&t=qmE-TbS_QTYOwraCq-tNpcolK5QTVUG3ELQ-ahEeCxY"
        // src="https://avatars.githubusercontent.com/u/26818515?v=4"
      />
    </WrapItem>
  );
};
