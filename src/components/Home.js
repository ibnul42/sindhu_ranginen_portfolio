import React from "react";
import Achievement from "./achievements/Achievement";
import Hero from "./contents/Hero";
import Experience from "./experience/Experience";
import Project from "./projects/Project";
import Skill from "./Skill/Skill";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="hr_line"></div>
      </div>
      <Project />
      <div className="container">
        <div className="hr_line"></div>
      </div>
      <Skill />
      <div className="container">
        <div className="hr_line"></div>
      </div>
      <Experience />
      <div className="container">
        <div className="hr_line"></div>
      </div>
      <Achievement />
    </>
  );
};

export default Home;
