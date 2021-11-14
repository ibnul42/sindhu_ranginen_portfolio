import React from "react";
import "./Hero.css";
import Image from '../../assets/Image-01.svg'

const Hero = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center hero_text">
          <h2>Hi there,</h2>
          <p>I'm a Web Developer with excellent skill in developing sites and hybrid applications both informational and transactional.</p>
          <button type="button" className="btn_my_resume">My Resume</button>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Image} alt="" className="img-fluid" style={{maxWidth: "80%"}} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
