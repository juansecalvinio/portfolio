import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Tag,
  Text,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { Project } from "models/Project";

interface Props {
  id: number;
  project: Project;
}

export const ProjectCard = ({ id, project }: Props) => {
  return (
    <Card
      variant={"outline"}
      padding={0}
      key={`${project.title}-${id}`}
      width={"100%"}
      p={"0.5rem"}
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
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={"0.5rem"}
        p={"0.5rem"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          flexWrap={"wrap"}
          gap={"0.5rem"}
        >
          {project.tags.map((tag, index) => (
            <Tag colorScheme="gray" key={`${tag}-${index}`}>
              {tag}
            </Tag>
          ))}
        </Box>

        {project.repositoryUrl && (
          <Link
            key={project.title}
            href={project.repositoryUrl}
            target="_blank"
          >
            <IconButton
              aria-label={"github"}
              icon={<FaGithub />}
              size={"xs"}
              ml={"0.5rem"}
              variant={"outline"}
              fontSize={"20px"}
            />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};
