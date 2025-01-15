import { IProject } from "@/models";
import { requestgql } from "@/utils";
import { gql } from "graphql-request";
import { NextResponse } from "next/server";

export const GET = async () => {
  const query = gql`
    query {
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
    const data = await requestgql<{ projects: IProject[] }>({ query });

    return NextResponse.json({ data: data.projects }, { status: 200 });
  } catch(error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
