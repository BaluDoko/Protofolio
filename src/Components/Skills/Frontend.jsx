import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularProgress from "@mui/material/CircularProgress";
import "./Skills.css";

function Frontend() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 200 },
      items: 3,
    },
  };

  return (
    <div className="skill-container">
      <h2>Frontend</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="owl-carousel owl-theme skill-slider frontend"
      >
        <div className="item">
          <h1>html</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={85}
          />
          <span>85%</span>
        </div>
        <div className="item">
          <h1>css</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={85}
          />
          <span>85%</span>
        </div>
        <div className="item">
          <h1>Bootstrap</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={80}
          />
          <span>80%</span>
        </div>
        <div className="item">
          <h1>javascript</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={75}
          />
          <span>75%</span>
        </div>
      </Carousel>
    </div>
  );
}

export default Frontend;
