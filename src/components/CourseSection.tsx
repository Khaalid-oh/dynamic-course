import React from "react";
import CourseHeaderRecord from "./CourseHeaderRecord";
import CalloutRecord from "./CalloutRecord";
import LearnSectionRecord from "./LearnSectionRecord";
import PricingSectionRecord from "./PricingSectionRecord";
import NavbarRecord from "./Navbar";
import AboutSectionRecord from "./About"
import FooterRecord from "./Footer";




function CourseSection({ details }) {
  if (details.__typename === "NavbarRecord") {
    return <NavbarRecord details={details} />;
  } else if (details.__typename === "CourseHeaderRecord") {
    return <CourseHeaderRecord details={details} />;
  } else if (details.__typename === "CalloutRecord") {
    return <CalloutRecord details={details} />;
  } else if (details.__typename === "LearnSectionRecord") {
    return <LearnSectionRecord details={details} />;
  } else if (details.__typename === "PricingSectionRecord") {
    return <PricingSectionRecord details={details} />;
    } else if (details.__typename === "AboutSectionRecord") {
      return <AboutSectionRecord details={details} />;
  } else if (details.__typename === "FooterRecord") {
    return <FooterRecord details={details} />;
  }

  return <></>;
}

export default CourseSection;
