import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiMui, SiRemix } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="item">
          <FaHtml5 className="icon" size={"150px"} />
          <h1>html</h1>
        </div>
        
        <div className="item">
          <FaCss3Alt className="icon" size={"150px"} />

          <h1>css</h1>
        </div>
        <div className="item">
          <SiTailwindcss className="icon" size={"150px"} />
          <h1>Tailwind css</h1>
        </div>
        <div className="item">
          <FaBootstrap className="icon" size={"150px"} />

          <h1>Bootstrap</h1>
        </div>
        <div className="item">
          <SiMui className="icon" size={"150px"} />

          <h1>material UI</h1>
        </div>
        <div className="item">
          <IoLogoJavascript className="icon" size={"150px"} />

          <h1>javascript</h1>
        </div>
        <div className="item">
          <FaReact className="icon" size={"150px"} />

          <h1>React </h1>
        </div>
        <div className="item">
          <TbBrandNextjs className="icon" size={"150px"} />

          <h1>Next js </h1>
        </div>
        <div className="item">
          <SiRemix  className="icon" size={"150px"} />

          <h1>Remix  </h1>
        </div>
      </Carousel>
    </div>
  );
}

export default Frontend;
