import React from "react";
import "./About.css";
import Image from "../../assets/Image-02.svg";
import { AiFillGithub } from "react-icons/ai";
import { SiApache, SiPerforce } from "react-icons/si";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-sm-12 col-md-6">
          <img src={Image} alt="" className="img-fluid w-80" />
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="main_title">Education</div>
          <div className="graduation_title">Bachelor of Technology: CS</div>
          <div className="graduation_from">
            Jawaharlal Nehru Technological University (JNTU) – India
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-6">
          <div className="main_title">Qualifications</div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-left">
          <div className="section_title small_screen_display">Certifications</div>
          <div className="section_proof">
          <h6>Microsoft Certified HTML5 developer</h6>
            <h6>Microsoft Certified CSS3 and JavaScript developer</h6>
            <h6>Microsoft Certified JavaScript developer</h6>
          </div>
        </div>

        <div className="col-sm-12 col-md-6">
          <div className="section_title">Programming Analysis</div>
          <div className="analysid_desc">
              <p>Application Software Specifications</p>
              <p>Application Design</p>
              <p>Application Development</p>
              <p>Unit Testing</p>
              <p>Debugging and Maintenance</p>
          </div>
        </div>
        
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-left">
          <div className="section_title small_screen_display">Version Control System</div>
          <div className="section_proof">

            <Link to='/' > <AiFillGithub size="50" /> </Link>
            <Link to='/' > <SiApache size="50" /> </Link>
            <Link to='/' > <SiPerforce size="50" /> </Link>
          </div>
        </div>

        <div className="col-sm-12 col-md-6">
          <div className="section_title">Servers</div>
          <div className="analysid_desc">
              <p>Apache Tomcat</p>
              <p>WebSphere</p>
              <p>Jenkins</p>
              <p>JBoss</p>
              <p>Predix</p>
          </div>
        </div>

        <div className="col-sm-12 col-md-6">
          <div className="section_title">Special Software</div>
          <div className="analysid_desc">
              <p>Apache HTTP Server</p>
              <p>SOAPUI</p>
              <p>HP QC11</p>
              <p>JIRA</p>
              <p>Jenkins</p>
              <p>Phonegap</p>
              <p>Cordova</p>
              <p>CA Rally</p>
          </div>
        </div>

        <div className="col-sm-12 col-md-6">
          <div className="section_title">Database</div>
          <div className="analysid_desc">
              <p>Oracle</p>
              <p>SQL Server</p>
              <p>MySQL</p>
              <p>RDBMS</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
