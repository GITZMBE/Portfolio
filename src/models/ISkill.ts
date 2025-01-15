import { IAsset } from "@/models";

export interface ISkill {
  id: string;
  title: string;
  slug: string;
  icon: IAsset | null;
  iconUrl: string | null;
};

export default ISkill;