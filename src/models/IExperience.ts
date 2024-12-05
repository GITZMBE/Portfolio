import ISkill from "./ISkill";

export interface IExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
  responsibilities: string[];
  skills: ISkill[];
  achievements?: string[];
  tags?: string[];
};

export default IExperience;
