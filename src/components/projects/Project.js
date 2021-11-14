import React from "react";
import "./Project.css";
import SingleProject from "./SingleProject";

const allProjects = [
  {
    title: "Multi Cloud Management",
    description: "Simplifies management of multi-cloud environments and on-premises infrastructure. It unifies management across different public clouds, on premise private clouds, and software-defined infrastructure. It's also intended to work for everyone in an organization, including IT managers, developers, and business executives.",
    technologies: ["React JS", "Redux", "Reselect", "HTML5", "JavaScript", "JSX"],
    image: "",
    preview: "",
    sourceCode: "",
  },
  {
    title: "Event management solution ",
    description: "Managing events, estimations, tracking cost, standards, cost rates etc. This project will be a one stop for the new outages and event management and will eliminate the need to go into multiple different application.  ",
    technologies: ["Angular", "TypeScript", "Predix", "Phonegap", "HTML5", "NodeJs", "SCSS"],
    image: "",
    preview: "",
    sourceCode: "",
  },
  {
    title: "Convert Storefronts from Bootstrap 2 to Bootstrap 3",
    description: "The project’s goal is to convert multiple web storefronts from bootstrap 2 to bootstrap 3 for Mechanical and Electronic equipment sales using cloud craze and sales force software.",
    technologies: ["HTML5", "JavaScript", "jQuery", "Handlebars JS", "Cloudcraze", "Salesforce", "CSS3", "Angular", "Grunt"],
    image: "",
    preview: "",
    sourceCode: "",
  },
  {
    title: "FSMP for the GE Employees",
    description: "The project’s goal is to design and develop an application FSMP for the GE employees for their internal use including timesheets, power monitoring etc. It is developed for iPad, iPhone and desktop browser websites.",
    technologies: ["HTML5", "JavaScript", "jQuery", "CSS3", "Angular", "Grunt"],
    image: "",
    preview: "",
    sourceCode: "",
  },
  {
    title: "Application with Unique Design Across Devices",
    description: "The application is developed incorporating mobile functionalities such as touch, swipe, slide etc. It uses Bank of America's H3 Framework and MDA rest services.",
    technologies: ["HTML5", "JavaScript", "jQuery", "CSS3", "AngularJs", "Bootstrap"],
    image: "",
    preview: "",
    sourceCode: "",
  },
  {
    title: "TSI application",
    description: "Telecom Store Inventory is a web-based project where a user can log in to the system view and purchase items related to mobiles. It automates the inventory management of a telecom store. The TSI application includes three major modules, it is driven by roles i.e., Retailer role/Admin role/Inventory Manager role.",
    technologies: ["HTML", "JavaScript", "CSS", "Java", "JDK", "Servlets", "SQL"],
    image: "",
    preview: "",
    sourceCode: "",
  },
  {
    title: "Develop Screens for Native iOS Application of Lloyds Bank",
    description: "Application accesses native APIs using Phonegap framework, thus making the application a hybrid app, which has HTML5 features, an advantageous feature that is not present in native apps.",
    technologies: ["HTML5", "jQuery", "jQueryMobile", "JavaScript", "CSS3"],
    image: "",
    preview: "",
    sourceCode: "",
  },
];

const Project = () => {
  return (
    <div className="container" id="projects">
      <div className="main_title">Projects</div>
      <div className="row">
        {allProjects.map((project, index) => {
          return <SingleProject key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
