import { gql, GraphQLClient } from "graphql-request";
import CourseSection from '../components/CourseSection'

export default function index({course}) {
  console.log(course)
  return (
    <div className="font-inconsolota scroll-smooth">
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
        ... on NavbarRecord {
          __typename
          logoText
          home
          about
          login
        }
        ... on AboutSectionRecord {
          __typename
          bigTitle
          tutor {
            url
            height
            width
          }
          description
          buttonText
        }
        ... on CourseHeaderRecord {
          __typename
          bigTitle
          smallTitle
          description
          buttonText
        }
        ... on CalloutRecord {
          __typename
          bigTitle
          smallTitle
          description
          image {
            url
            height
            width
          }
        }
        ... on LearnSectionRecord {
          __typename
          hoursOfContent
          hoursOfContentText
          numberOfLessons
          numberOfLessonsText
          title
          id
          learningPoint {
            title
            id
          }
        }
        ... on PricingSectionRecord {
          __typename
          title
          id
          pricingCard {
            isFree
            priceInCents
            priceSuffix
            title
            id
            description
            finePrint
            featured
            buttonText
          }
        }
        ... on FooterRecord {
          __typename
          terms
          privacy
          support
          copyright
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
