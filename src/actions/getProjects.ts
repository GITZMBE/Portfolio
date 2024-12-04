import { IProject } from "@/models";
import { request } from "@/utils";

/**
 * Fetches a post by its slug from the API.
 * @param {string} slug - The slug of the post to fetch.
 * @returns {Promise<IPost>} A promise that resolves with the post data.
 */
export const getProjects = async () => {
  const data = await request<IProject[]>(`${process.env.NEXT_PUBLIC_BASEURL}/api/projects`, {
    method: 'GET',
    cache: 'no-cache',
  });

  if (!data) return [];

  return data;
};

export default getProjects;