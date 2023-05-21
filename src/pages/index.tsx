import { gql, GraphQLClient } from "graphql-request";
import CourseSection from '../components/CourseSection'

export default function index({course}) {
  console.log(course)
  return (
    <div>
      {course.courseDetails.map(section => <CourseSection details =
      {section} key={section.id}/>)}
    </div>
  );
}

 

const query = gql`
  query {
    course {
      id
      name
      slug
      courseDetails {
        ... on CourseHeaderRecord {
          __typename
          bigTitle
          smallTitle
          description
          buttonText
          id
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });
  const course = await graphQLClient.request(query);
  console.log(course);
  return {
    props: course,
  };
}
