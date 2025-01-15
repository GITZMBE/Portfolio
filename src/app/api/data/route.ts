import { IExperience, IProject, ISkill } from "@/models";
import { requestgql } from "@/utils";
import { gql } from "graphql-request";
import { NextResponse } from "next/server";

/**
 * Handles the GET request for fetching experiences, skills and projects data.
 * Executes a GraphQL query to retrieve a list of experiences with their details, skills with their details, and projects with their details.
 * @returns {Promise<NextResponse>} A promise that resolves with the experiences, skills and projects data in JSON format,
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
      skills (first: 50) {
        id
        title
        slug
        icon {
          url
          width
          height
        }
        iconUrl
      }
      projects (first: 20) {
        id
        title
        slug
        description
        githubLink
        banner {
          url
          width
          height
        }
        logo {
          url
          width
          height
        }
        images(orderBy: createdAt_ASC) {
          url
          width
          height
        }
        skills(first: 30) {
          id
          title
          slug
          icon {
            url
            width
            height
          }
          iconUrl
        }
        hostingLink
      }
    }
  `;

  try {
    const data = await requestgql<{ experiences: IExperience[], skills: ISkill[], projects: IProject[] }>({ query });

    return NextResponse.json({ data }, { status: 200 });
  } catch(error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
