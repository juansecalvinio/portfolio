import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { WorkItem, WorkItemProps } from "components/WorkItem";

const experience: WorkItemProps[] = [
  {
    company: "Santander Tecnología",
    role: "Software Engineer",
    description:
      "Building the best platform for your investments in Argentina.",
    startTime: "2020",
    endTime: "Present",
  },
  {
    company: "Montagne Outdoors",
    role: "Web Developer",
    description:
      "I contributed to improving the e-commerce platform, adopting the Mercado Pago API to enable card payments. I worked with a PHP, SQL, and JavaScript stack.",
    startTime: "2019",
    endTime: "2020",
  },
  {
    company: "Instituto Médico Alexander Fleming",
    role: "Full Stack Developer",
    description:
      "Modernized legacy applications with new technologies like React and NodeJS. Developed SQL queries, jobs, and reports with QlikView.",
    startTime: "2017",
    endTime: "2019",
  },
];

export const WorkExperience = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Work Experience
      </Heading>
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
