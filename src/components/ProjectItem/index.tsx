import React from "react";
import { Box, IconButton, Link, Tag, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { Project, ProjectKind } from "models/Project";

interface Props {
  project: Project;
}

const KIND_LABELS: Record<ProjectKind, string> = {
  "side-project": "Side Project",
  freelance: "Freelance",
  challenge: "Challenge",
};

export const ProjectItem = ({ project }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderTop="1px solid"
      borderColor="border.subtle"
      paddingY={4}
    >
      <Box
        display="flex"
        gap={2}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent="space-between"
        width="100%"
      >
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          fontWeight="bold"
          fontSize="md"
        >
          {project.title}
        </Link>
        <Tag
          size="sm"
          variant="outline"
          fontFamily="mono"
          flexShrink={0}
          textTransform="uppercase"
          letterSpacing="0.04em"
        >
          {KIND_LABELS[project.kind]}
        </Tag>
      </Box>

      <Text mt={2} fontSize="sm" color="text.secondary" maxW="560px">
        {project.description}
      </Text>

      <Box
        mt={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        <Box display="flex" flexWrap="wrap" gap={2}>
          {project.tags.map((tag) => (
            <Tag key={tag} colorScheme="gray" fontFamily="mono">
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
      </Box>
    </Box>
  );
};
