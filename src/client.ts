import { graphql } from "./gql";

const queryAllCourse = graphql(/* GraphQL */ `
  query {
    allCourse {
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
`);
