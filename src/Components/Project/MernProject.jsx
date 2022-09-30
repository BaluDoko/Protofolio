import ProjectCard from "./ProjectCard";
import "./Project.css";
import myDairy from "../../img/Mydairy.png";
import crypto from "../../img/crypto.png";

function MernProject() {
  const projects = [
    {
      title: "  Crypto Tracker ",
      description:
        "An interactive website where you can see the performance of  Cryptocurency market (coin price, volume, 24hr changes and market capital) and you can search a coin by using its name.",
      tech: "HTML, CSS, JAVASCRIPT",
      imgUrl: crypto,
    },
    {
      title: "Daily Dairy ",
      description:
        "An interactive website where you can use as daily dairy where you can add the date and memories in that day",
      tech: "HTML, CSS, REACT",
      imgUrl: myDairy,
    },
  ];

  return (
    <section className="project" id="project">
      {projects.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}

      <img className="background-image-right" src={""}></img>
    </section>
  );
}

export default MernProject;
