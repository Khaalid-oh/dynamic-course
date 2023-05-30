import { fetchCourse } from "@/services/graphql/graphql-client";
import Home from "./home";

export default function index({ course }) {
  return <Home course={course} />;
}

export async function getStaticProps() {
  const { course } = await fetchCourse();
  return {
    props: course,
  };
}
