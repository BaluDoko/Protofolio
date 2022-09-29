import React from "react";
import "./Education.css";
import SchoolIcon from "@mui/icons-material/School";

function Services(props) {
  return (
    <div className="education">
      <div className="class">
        <span>
          <SchoolIcon style={{ marginRight: "10px" }} />
          {props.title}
        </span>
        <span style={{ fontSize: "1rem", color: "#808080" }}>{props.year}</span>
      </div>
      <p>{props.where1}</p>
      <p>{props.where2}</p>
      <div className="grade">
        <span>{props.cgpa}</span>
        <span
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
