import { IExperience } from "@/models";
import { requestgql } from "@/utils";
import { gql } from "graphql-request";
import { NextResponse } from "next/server";

/**
 * Handles the GET request for fetching experiences data.
 * Executes a GraphQL query to retrieve a list of experiences with their details.
 * @returns {Promise<NextResponse>} A promise that resolves with the experiences data in JSON format,
 * or an error message if the request fails.
 */
export const GET = async () => {
  const query = gql`
    query {
      experiences (orderBy: startDate_ASC) {
        id
        title
        company
        location
        startDate
        endDate
        description
        responsibilities
        skills (first: 30) {
          id
          title
          slug
          icon {
            width
            height
            url
          }
          iconUrl
        }
        achievements
        tags
      }
    }
  `;

  try {
    const data = await requestgql<{ experiences: IExperience[] }>({ query });

    return NextResponse.json({ data: data.experiences }, { status: 200 });
  } catch(error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
