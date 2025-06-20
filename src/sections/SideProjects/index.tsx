import React from "react";
import { Box, Heading, Link, Tag, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { sideProjects } from "./side-projects";

export const SideProjects = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Side Projects
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
        {sideProjects.map((project, index) => (
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
                <Tag colorScheme="gray" key={`${tag}-${index}`}>
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
