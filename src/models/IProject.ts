import { IAsset, ISkill } from "@/models";

export interface IProject {
  title: string;
  slug: string;
  description: string;
  githubLink: string | null;
  banner: IAsset | null;
  logo: IAsset | null;
  images: IAsset[];
  skills: ISkill[];
  hostingLink: string | null;
};

export default IProject;