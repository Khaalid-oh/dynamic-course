import { GraphQLClient } from "graphql-request";
import { homeQuery } from "./gql-query";

export const graphqlClient = new GraphQLClient("https://graphql.datocms.com", {
  headers: {
    "content-type": "application/json",
    authorization: "Bearer " + process.env.DATOCMS_API_KEY,
  },
});

export async function fetchCourse() {
  try {
    const course = await graphqlClient.request(homeQuery);
    return { course };
  } catch (err) {
    console.log(err);
  }
}
