import React from "react";
import './Achievement.css'

const Achievement = () => {
  return (
    <div className="container">
      <div className="main_title">My Achievements</div>
      <div className="achievements d-flex flex-wrap justify-content-between">
          <div className="col-md-3 col-sm-12 all_projects m-3">
            <p className="total_num bg_achievement">20+</p>
            <p className="total_name bg_achievement">Completed Projects</p>
          </div>
          <div className="col-md-3 col-sm-12 all_projects m-3">
            <p className="total_num bg_achievement">50+</p>
            <p className="total_name bg_achievement">Git Contribution</p>
          </div>
          <div className="col-md-3 col-sm-12 all_projects m-3">
            <p className="total_num bg_achievement">10+</p>
            <p className="total_name bg_achievement">Scripts Added</p>
          </div>
          <div className="col-md-3 col-sm-12 all_projects m-3">
            <p className="total_num bg_achievement">30+</p>
            <p className="total_name bg_achievement">Open Source Projects</p>
          </div>
      </div>
    </div>
  );
};

export default Achievement;
