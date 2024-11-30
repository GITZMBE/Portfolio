import { toast } from "react-toastify";

/**
 * Generic function to fetch data from the API with error handling and response validation.
 * @param url - The URL to fetch the data from.
 * @param options - The options for the fetch request (e.g., method, headers).
 * @returns {Promise<any>} - The data from the API or null if an error occurs.
 */
export const request = async <T>(url: string, options?: RequestInit): Promise<T | null> => {
  try {
    const res = await fetch(url, { ...options, cache: 'no-cache' });

    if (!res.ok) {
      if (typeof window !== 'undefined') {
        toast.error("Failed to fetch data. Please try again later.");
      }
      return null;
    }

    const json: { data: T | null } = await res.json();
    return json.data || null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    if (typeof window !== 'undefined') {
      toast.error("An error occurred while fetching data.");
    }
    return null;
  }
};

export default request;