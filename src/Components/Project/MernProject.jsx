import ProjectCard from "./ProjectCard";
import "./Project.css";
import myDairy from "../../img/Mydairy.png";
import crypto from "../../img/crypto.png";

function MernProject() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: myDairy,
    },
    {
      title: "Microsoft Clone",
      description:
        "Design & DmhabhsbdhSBD iihbcq dqedqe  qqdhi qiudqe qe qe qe dqeud qedevelopment",
      imgUrl: crypto,
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
