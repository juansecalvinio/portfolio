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
    tags: ["TailwindCSS", "NextJS"],
  },
  {
    title: "Google Auth with Golang",
    description:
      "Pequeño proyecto de autenticación con Google utilizando Golang en el backend y React en el frontend.",
    href: "https://go-auth-google-react.vercel.app/",
    tags: ["Go", "React"],
  },
  {
    title: "Task Board",
    description:
      "Tablero kanban, para crear y administrar tareas y moverlas a diferentes estados.",
    href: "https://task-board-opal.vercel.app/",
    tags: ["React"],
  },
];
