import React from 'react'
import CourseHeaderRecord from '../components/CourseHeaderRecord'
import CalloutRecord from "../components/CalloutRecord";
import LearnSectionRecord from "../components/LearnSectionRecord";
import PricingSectionRecord from "../components/PricingSectionRecord";

function CourseSection({details}) {
  console.log(details)
  if(details.__typename === "CourseHeaderRecord") {
    return <CourseHeaderRecord details={details}/> 
  }else if(details.__typename === "CalloutRecord"){
    return <CalloutRecord details={details} />
  }else if(details.__typename === "LearnSectionRecord"){
    return <LearnSectionRecord details={details} />
  }else if(details.__typename === "PricingSectionRecord"){
    return <PricingSectionRecord details={details} />
  }

  return (<></>)
}

export default CourseSection
