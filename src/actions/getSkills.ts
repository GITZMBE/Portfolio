import { ISkill } from "@/models";
import { request } from "@/utils";

/**
 * Fetches a list of skills from the API.
 * @returns {Promise<ISkill[]>} A promise that resolves with the skills data.
 */
export const getSkills = async () => {
  const data = await request<ISkill[]>(`${process.env.NEXT_PUBLIC_BASEURL}/api/skills`, {
    method: 'GET',
    cache: 'no-cache',
  });

  if (!data) return [];

  return data;
};

export default getSkills;