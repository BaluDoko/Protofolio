import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import LinearProgress, {
//   LinearProgressWithLabel,
// } from "@mui/material/LinearProgress";

import "./Skills.css";

function Skills() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };

  return (
    <div className="skill">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>Skills</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
          >
            <div className="item">
              <img src="" alt="Image" />
              <h5>Web Development</h5>
              {/* <LinearProgressWithLabel value={80} /> */}
            </div>
            <div className="item">
              <img src="" alt="Image" />
              <h5>Brand Identity</h5>
            </div>
            <div className="item">
              <img src="" alt="Image" />
              <h5>Brand Identity</h5>
            </div>
          </Carousel>
        </div>
      </div>

      <img className="background-image-left" src="" alt="Image" />
    </div>
  );
}

export default Skills;
