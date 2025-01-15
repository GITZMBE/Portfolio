import { IExperience, IProject, ISkill } from "@/models";
import { request } from "@/utils";

export const getData = async () => {
  const data = await request<{ experiences: IExperience[], skills: ISkill[], projects: IProject[] }>(`${process.env.NEXT_PUBLIC_BASEURL}/api/data`, {
    method: 'GET',
    cache: 'no-cache',
  });

  if (!data) return { experiences: [], skills: [], projects: [] };

  return data;
};

export default getData;