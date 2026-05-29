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
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      variant="outline"
      borderColor="border.subtle"
      width="100%"
      p={2}
    >
      <CardHeader p={2}>
        <Link
          href={project.href}
          fontSize="md"
          fontWeight="bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </Link>
      </CardHeader>
      <CardBody p={2}>
        <Text fontSize="sm" color="text.secondary">
          {project.description}
        </Text>
      </CardBody>
      <CardFooter
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
        p={2}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          flexWrap="wrap"
          gap={2}
        >
          {project.tags.map((tag, index) => (
            <Tag
              colorScheme="gray"
              fontFamily="mono"
              key={`${tag}-${index}`}
            >
              {tag}
            </Tag>
          ))}
        </Box>

        {project.repositoryUrl && (
          <IconButton
            as="a"
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} repository on GitHub`}
            icon={<FaGithub />}
            size="xs"
            variant="outline"
            fontSize="20px"
          />
        )}
      </CardFooter>
    </Card>
  );
};
