export interface Project {
  title: string;
  description: string;
  href: string;
  tags: string[];
}

export const challengesProjects: Project[] = [
  {
    title: "Saas Landing Page",
    description:
      "Challenge de freeCodeCamp desarrollado con NextJS para mostrar frases al azar. También se puede ver su versión VanillaJS",
    href: "https://saas-landing-page-mocha-pi.vercel.app/",
    tags: ["Tailwind", "NextJS"],
  },
  // {
  //   title: "Task Board",
  //   description:
  //     "Tablero kanban, para crear y administrar tareas y arrastrarlas a diferentes estados. Creado con React y ViteJS, y se utilizó Zustand para el manejo de estado de la aplicación.",
  //   href: "https://task-board-opal.vercel.app/",
  //   tags: ["React", "TypeScript", "ViteJS", "ChakraUI", "Zustand"],
  // },
  // {
  //   title: "Random Quotes",
  //   description:
  //     "Challenge de freeCodeCamp desarrollado con NextJS para mostrar frases al azar. También se puede ver su versión VanillaJS",
  //   href: "https://random-quotes-next.vercel.app/",
  //   tags: ["freeCodeCamp", "Challenges", "NextJS", "ChakraUI"],
  // },
];
