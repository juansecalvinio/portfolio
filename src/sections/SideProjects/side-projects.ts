export interface Project {
  title: string;
  description: string;
  href: string;
  tags: string[];
}

export const sideProjects: Project[] = [
  {
    title: "Aguila Turismo",
    description:
      "Landing page para agencia de turismo, desarrollado con NextJS y tailwind-css.",
    href: "https://www.aguilaturismoarg.com/",
    tags: ["TypeScript", "Next", "Tailwind"],
  },
];
