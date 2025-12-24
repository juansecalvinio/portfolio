import { Project } from "models/Project";

export const challengesProjects: Project[] = [
  {
    title: "Saas Landing Page",
    description:
      "Landing page for a SaaS product, built with TailwindCSS and NextJS.",
    href: "https://saas-landing-page-mocha-pi.vercel.app/",
    repositoryUrl: "https://github.com/juansecalvinio/saas-landing-page",
    tags: ["TailwindCSS", "NextJS"],
  },
  {
    title: "Google Auth with Golang",
    description:
      "A little project for Google authentication using Golang in the backend and React in the frontend.",
    href: "https://go-auth-google-react.vercel.app/",
    repositoryUrl: "https://github.com/juansecalvinio/go-auth-google",
    tags: ["Go", "React"],
  },
  {
    title: "Task Board",
    description:
      "Kanban board for creating and managing tasks and moving them to different states, built with React.",
    href: "https://task-board-opal.vercel.app/",
    repositoryUrl: "https://github.com/juansecalvinio/task-board",
    tags: ["React"],
  },
];
