import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        About
      </Heading>
      <Box marginTop={"1rem"}>
        <Text fontSize={{ base: "sm", md: "md", lg: "md" }}>
          Mi motivación en la tecnología va más allá del código, me atrae la
          posibilidad de impactar a través del desarrollo. Estoy constantemente
          buscando aprender y evolucionar, manteniéndome al día con las últimas
          tendencias y prácticas en desarrollo de software. Mi objetivo es no
          solo resolver problemas técnicos, sino también contribuir
          significativamente a proyectos que marquen la diferencia.
        </Text>
      </Box>
    </Box>
  );
};
