import React from "react";
import { Box, Heading, Link, Tag, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

interface Project {
  title: string;
  description: string;
  href: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Task Board",
    description:
      "Tablero kanban, para crear y administrar tareas y arrastrarlas a diferentes estados. Creado con React y ViteJS, y se utilizó Zustand para el manejo de estado de la aplicación.",
    href: "https://task-board-opal.vercel.app/",
    tags: ["React", "TypeScript", "ViteJS", "ChakraUI", "Zustand"],
  },
  {
    title: "Random Quotes",
    description:
      "Challenge de freeCodeCamp desarrollado con NextJS para mostrar frases al azar. También se puede ver su versión VanillaJS",
    href: "https://random-quotes-next.vercel.app/",
    tags: ["freeCodeCamp", "Challenges", "NextJS", "ChakraUI"],
  },
];

export const Projects = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Projects
      </Heading>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={"1rem"}
        mt={"1rem"}
      >
        {projects.map((project, index) => (
          <Card
            variant={"outline"}
            padding={0}
            key={`${project.title}-${index}`}
            width={"100%"}
          >
            <CardHeader p={"0.5rem"}>
              <Link
                href={project.href}
                fontSize={"16px"}
                fontWeight={"bold"}
                target="_blank"
              >
                {project.title}
              </Link>
            </CardHeader>
            <CardBody p={"0.5rem"}>
              <Text fontSize={"14px"}>{project.description}</Text>
            </CardBody>
            <CardFooter
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              flexWrap={"wrap"}
              gap={"0.5rem"}
              p={"0.5rem"}
            >
              {project.tags.map((tag, index) => (
                <Tag colorScheme="yellow" key={`${tag}-${index}`}>
                  {tag}
                </Tag>
              ))}
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
