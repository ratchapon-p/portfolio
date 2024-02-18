import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio-main">
      <div className="port-header">Resume</div>

      <div className="port-content">

      </div>

      <div className="port-footer-button">
        <Link className="port-footer-text" to='/'>Back</Link>
      </div>
    </div>
  );
};

export default Portfolio;
