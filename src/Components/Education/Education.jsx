import React from "react";
import "./Education.css";
import SchoolIcon from "@mui/icons-material/School";

function Services(props) {
  return (
    <div id="maineducation" className="education">
      <div className="class">
        <span>
          <SchoolIcon className="edu-icon" style={{ marginRight: "10px" }} />
          {props.title}
        </span>
        <span className="year" style={{ fontSize: "1rem", color: "#808080" }}>
          {props.year}
        </span>
      </div>
      <p>{props.where1}</p>
      <p>{props.where2}</p>
      <div className="grade">
        <span className="cgpa">{props.cgpa}</span>
        <span
          className="percent"
          style={{
            fontWeight: "900",
            fontSize: "1.4rem",
            marginLeft: "0.7rem",
          }}
        >
          {props.mark}
        </span>
      </div>
    </div>
  );
}

export default Services;
