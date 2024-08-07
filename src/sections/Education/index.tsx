import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { EducationItem, EducationItemProps } from "components/EducationItem";

const education: EducationItemProps[] = [
  {
    place: "Universidad Tecnológica Nacional",
    career: "Técnico Superior en Programación",
    startTime: "2011",
    endTime: "2017",
  },
  {
    place: "Acámica",
    career: "Desarrollador Web Full Stack",
    startTime: "2018",
    endTime: "2019",
  },
  {
    place: "Acámica",
    career: "Desarrollador Front End React",
    startTime: "2019",
    endTime: "2020",
  },
];

export const Education = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={"2rem"}>
      <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
        Education
      </Heading>
      <Box
        marginTop={"1.25rem"}
        display={"flex"}
        flexDirection={"column"}
        gap="0.75rem"
      >
        {education.map((item) => (
          <EducationItem key={`${item.place}-${item.career}`} item={item} />
        ))}
      </Box>
    </Box>
  );
};
