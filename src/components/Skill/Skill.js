import React from "react";

import { FaAngular, FaReact, FaHtml5, FaGrunt} from "react-icons/fa";
import { SiTypescript, SiApachecordova, SiJquery} from "react-icons/si";
import { IoLogoCss3} from "react-icons/io";
import { BsFillBootstrapFill} from "react-icons/bs";
import SingleSkill from "./SingleSkill";
import "./Skill.css";

const allSkills = [
  {
    icon: <FaAngular size="40px" />,
    title: "Angular",
    description: "I've using angular",
  },
  {
    icon: <FaReact size="40px" />,
    title: "React",
    description: "I've using React",
  },
  {
    icon: <SiTypescript size="40px" />,
    title: "Typescript",
    description: "I've using Typescript",
  },
  {
    icon: <FaHtml5 size="40px" />,
    title: "Html5",
    description: "I've using Html5",
  },
  {
    icon: <IoLogoCss3 size="40px" />,
    title: "Css3",
    description: "I've using Css3",
  },
  {
    icon: <SiApachecordova size="40px" />,
    title: "Cordova",
    description: "I've using cordova",
  },
  {
    icon: <SiJquery size="40px" />,
    title: "Jquery",
    description: "I've using Jquery",
  },
  {
    icon: <BsFillBootstrapFill size="40px" />,
    title: "Bootstrap",
    description: "I've using Bootstrap",
  },
  {
    icon: <FaGrunt size="40px" />,
    title: "Grunt",
    description: "I've using Grunt",
  }
];

const Skill = () => {
  return (
    <div className="container mb-3">
      <div className="main_title">Skills</div>
      <p className="skill_title_desc">
        I've worked with multiple technologies as a developer to develop and
        maintain my projects.
      </p>
      <div className="row d-flex justify-content-between">
      {allSkills.map((skill, index) => (
        <SingleSkill key={index} skill={skill} />
      ))}
      </div>
    </div>
  );
};

export default Skill;
