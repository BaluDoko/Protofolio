import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularProgress from "@mui/material/CircularProgress";
import "./Skills.css";

function Backend() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 200 },
      items: 3,
    },
  };

  return (
    <div className="skill-container">
      <h2>Backend</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="owl-carousel owl-theme skill-slider backend"
      >
        <div className="item">
          <h1>node.js</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={80}
          />
          <span>80%</span>
        </div>
        <div className="item">
          /<h1>express.js</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={75}
          />
          <span>75%</span>
        </div>
        <div className="item">
          <h1>mongoDB</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={70}
          />
          <span>70%</span>
        </div>
        <div className="item">
          <h1>mongoose</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={70}
          />
          <span>70%</span>
        </div>
        <div className="item">
          <h1>Material UI</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={80}
          />
          <span>80%</span>
        </div>
        <div className="item">
          <h1>React.js</h1>
          <CircularProgress
            style={{ transform: "scale(2)" }}
            className="label"
            variant="determinate"
            value={70}
          />
          <span>70%</span>
        </div>
      </Carousel>
    </div>
  );
}

export default Backend;
