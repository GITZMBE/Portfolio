import ISkill from "./ISkill";

export interface IExperience {
  id: string;
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
