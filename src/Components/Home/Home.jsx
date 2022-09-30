import React from "react";
import "./Home.css";
import Vijay from "../../img/vijay.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";

function Home() {
  return (
    <div id="mainhome" className="home">
      <div className="home-left">
        <div className="home-text">
          <div className="home-title">
            <span className="span1">hey! I am </span>
            <span className="span2">Vijayaragavan</span>
          </div>
          <h1>MERN Stack Developer..</h1>
          <a href="https://drive.google.com/file/d/1mj_1K3x0AiHHe-dlQaeJJ0epq-01SmwY/view?usp=sharing">
            <button className="home-button button">My RESUME</button>
          </a>
        </div>

        <div className="home-icon">
          <a href="https://github.com/VijayaragavanS1999">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/vijaya-ragavan-858b671ba/">
            <LinkedInIcon />
          </a>
          <a href="mailto:sasigaviprt@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="home-right">
        <img className="vijay" src={Vijay} alt="" />
        <div className="dev">
          <CodeIcon className="code-icon" />
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
