export type ProjectKind = "side-project" | "freelance" | "challenge";

export interface Project {
  title: string;
  description: string;
  href: string;
  repositoryUrl?: string;
  tags: string[];
  kind: ProjectKind;
}
