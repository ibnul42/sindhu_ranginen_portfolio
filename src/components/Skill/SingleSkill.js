import React from "react";
import "./Skill.css";

const SingleSkill = ({skill}) => {

  const{icon, title, description} = skill;

  return (
      <div className="col-sm-12 col-md-4 col-lg-3 skill_section d-flex">
        <div className="skill_logo">
          <i>
            {icon}
          </i>
        </div>
        <div className="skill_details d-flex flex-column m_left-15">
          <h4>{title}</h4>
          <p>
            {description}
          </p>
        </div>
      </div>
  );
};

export default SingleSkill;
