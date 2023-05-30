import CourseSection from "@/components/CourseSection";

function home({ course }) {
  return (
    <div className="font-inconsolota scroll-smooth">
      {course?.courseDetails?.map((section) => (
        <CourseSection details={section} key={section.__typename} />
      ))}
    </div>
  );
}

export default home;
