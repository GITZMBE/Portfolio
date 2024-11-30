import { GraphQLClient } from 'graphql-request';

interface IRequestOptions {
  query: string;
  variables?: object;
};

/**
 * Performs a GraphQL query to the API.
 *
 * @param {{ query: string, variables?: object }} options
 * @param {string} options.query The GraphQL query to execute.
 * @param {object} [options.variables] An object with variables to pass to the query.
 * @returns {Promise<T>} The result of the query. The type of the result is determined by the
 *   generic type parameter `T`.
 *
 * @throws {Error} If the API configuration is incomplete.
 */
export const requestgql = <T>({ query, variables }: IRequestOptions) : Promise<T> => {
  const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_API_ENDPOINT;
  const token = process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN;

  if (!endpoint || !token) {
    throw new Error(
      `API configuration is missing. Missing ${
        !endpoint ? 'API endpoint' : 'API token'
      }. Please check your environment variables.`
    );
  }

  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${ token }`,
    },
  });

  return client.request<T>(query, variables);
};

export default requestgql;
