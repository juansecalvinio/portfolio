import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { WorkItem, WorkItemProps } from "components/WorkItem";

const experience: WorkItemProps[] = [
  {
    company: "Santander Tecnología",
    role: "Software Engineer",
    description: "Construyendo la mejor plataforma de inversiones.",
    startTime: "2020",
    endTime: "Present",
  },
  {
    company: "Montagne Outdoors SA",
    role: "Web Developer",
    description: "PHP e-commerce",
    startTime: "2019",
    endTime: "2020",
  },
  {
    company: "Instituto Médico Alexander Fleming",
    role: "Full Stack Developer",
    description: "Proyectos web con React y NodeJS. SQL Queries.",
    startTime: "2017",
    endTime: "2019",
  },
];

export const WorkExperience = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Heading fontSize={"24px"}>Work Experience</Heading>
      <Box
        marginTop={"1.25rem"}
        display={"flex"}
        flexDirection={"column"}
        gap="0.75rem"
      >
        {experience.map((item) => (
          <WorkItem key={`${item.company}-${item.role}`} item={item} />
        ))}
      </Box>
    </Box>
  );
};
