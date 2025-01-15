import { IExperience } from "@/models";
import { request } from "@/utils";

/**
 * Fetches all experiences from the API.
 * @returns {Promise<IExperience[]>} A promise that resolves with the experiences data.
 */
export const getExperiences = async () => {
  const data = await request<IExperience[]>(`${process.env.NEXT_PUBLIC_BASEURL}/api/experiences`, {
    method: 'GET',
    cache: 'no-cache',
  });

  if (!data) return [];

  return data;
};

export default getExperiences;