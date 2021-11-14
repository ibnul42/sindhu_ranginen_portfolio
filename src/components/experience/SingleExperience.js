import React from "react";
import "./Experience.css";

const SingleExperience = ({experience}) => {
  const{title, role, date} = experience;
  return (
      <div className="col-sm-12 col-md-3 experience_section d-flex flex-column justify-content-around text-center mb-4">
        <div className="experience_name">{title}</div>
        <div className="experience_role">{role}</div>
        <div className="experience_date">{date}</div>
      </div>
  );
};

export default SingleExperience;
