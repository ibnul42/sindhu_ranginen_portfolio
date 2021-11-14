import React from "react";

const SingleProject = ({project}) => {
  const {title, description, technologies, image, preview, sourceCode} = project;
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 d-flex mb-5">
        <div className="card card_container">
          <img
            className="card-img-top fluid"
            src={image}
            alt="Card cap"
            style={{
              backgroundColor: "orange",
              height: "150px",
              width: "100%",
            }}
          />
          <div className="card-body">
            <h4 className="card-title m-1">{title}</h4>
            <p className="card-text project_desc">{description}</p>
            <h4 className="card-title m-1">Technology</h4>
            <div className="d-flex justify-content-around flex-wrap technology">
              {
                technologies.map((technology, index) => (
                  <p key={index}>{technology}</p>
                ))
              }
            </div>
            <div className="card_links">
              <a href={preview} className="btn btn-primary">
                Preview
              </a>
              <a href={sourceCode} className="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      

      
    </>
  );
};

export default SingleProject;
