import React from "react";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import Logo from "../../img/logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-brand">
          <Avatar className="avatar" alt="It's me" src={"https://media.licdn.com/dms/image/D5603AQGxonUZ8JaXGw/profile-displayphoto-shrink_800_800/0/1691868620371?e=1727308800&v=beta&t=CA88uXvlCLmJmlH3JO56pb9HvqjE-C-atMOufKO_ptE"} />
          <h1 className="nav-title">BALREDDY MAHENDRA</h1>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <a href="#mainhome">Home</a>
            <a href="#mainexperience">Experience</a>
            <a href="#maineducation">Education</a>
            <a href="#mainskill">Skills</a>
            <a href="#mainproject">Projects</a>
          </ul>
        </div>
        <button className="nav-button button">
          <a href="#maincontact">Let's CONNECT</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
