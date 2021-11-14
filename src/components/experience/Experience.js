import React from "react";
import "./Experience.css";
import SingleExperience from "./SingleExperience";


const allExperience = [
  {
    title: "Capgemini – HPE (Atlanta, GA)",
    role: "Applications Consultant 2/ Front end Developer",
    date: "Jan 2019 to Present",
  },
  {
    title: "Capgemini - GE Power (Atlanta, GA)",
    role: "Applications Consultant 2/ Front end Developer",
    date: "Jan 2018 to Jan 2019",
  },
  {
    title: "Capgemini - JCI (Milwaukee, WI)",
    role: "UI Lead Developer",
    date: "May 2017 to Dec 2017",
  },
  {
    title: "Capgemini - GE Power (New Orleans, LA)",
    role: "Hybrid Technical Specialist",
    date: "Oct 2015 to Apr 2017",
  },
  {
    title: "TCS Chennai - BAC Touch/Bank of America (Charlotte- NC)",
    role: "Mobile Web Developer",
    date: "Oct 2012 to Sep 2013",
  },
  {
    title: "Tata Consultancy Services - Telecom Store Inventory",
    role: "JAVA/Web Developer",
    date: "Mar 2012 - July 2012",
  },
  {
    title: "Techno Sphere IT Hyderabad - LBG",
    role: "Mobile Developer",
    date: "May 2011 – Mar 2012",
  },
]

const Experience = () => {
  return (
    <div className="container mb-4">
      <div className="main_title">Experience</div>

      <div className="row d-flex justify-content-between">
      {allExperience.map((experience, index) => (
        <SingleExperience key={index} experience={experience} />
      ))}
      </div>
    </div>
  );
};

export default Experience;
