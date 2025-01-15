import { ISkill } from "@/models";
import { requestgql } from "@/utils";
import { gql } from "graphql-request";
import { NextResponse } from "next/server";

export const GET = async () => {
  const query = gql`
    query {
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
    }
  `;

  try {
    const data = await requestgql<{ skills: ISkill[] }>({ query });

    return NextResponse.json({ data: data.skills }, { status: 200 });
  } catch(error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
