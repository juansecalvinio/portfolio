import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { WorkItem, WorkItemProps } from "components/WorkItem";

const experience: WorkItemProps[] = [
  {
    company: "Santander Tecnología",
    role: "Software Engineer",
    description: "Construyendo la mejor plataforma tus inversiones.",
    startTime: "2020",
    endTime: "Present",
  },
  {
    company: "Montagne Outdoors SA",
    role: "Web Developer",
    description:
      "Colaboré en la mejora del sitio e-commerce, adopción de API de Mercado Pago para poder comprar con tarjetas. Trabajé con stack PHP, mySQL y Javascript",
    startTime: "2019",
    endTime: "2020",
  },
  {
    company: "Instituto Médico Alexander Fleming",
    role: "Full Stack Developer",
    description:
      "Modernización de aplicaciones legacy con nuevas tecnologías como React y NodeJS. Desarrollo de queries SQL, jobs y reportes de QlikView",
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
