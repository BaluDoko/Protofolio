import React from "react";
import "react-multi-carousel/lib/styles.css";
import Backend from "./Backend";
import Frontend from "./Frontend";

import "./Skills.css";

function Skills() {
  return (
    <div id="mainskill" className="skill">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>Skills</h2>
          <Frontend />
          <Backend />
        </div>
      </div>
    </div>
  );
}

export default Skills;
