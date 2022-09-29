import ProjectCard from "./ProjectCard";
import "./Project.css";
import Microsoft from "../../img/microsoft.png";
import ToDo from "../../img/to do.png";

function FrontendProject() {
  const projects = [
    {
      title: "Microsoft Clone",
      description:
        "Design & DmhabhsbdhSBD iihbcq dqedqe  qqdhi qiudqe qe qe qe dqeud qedevelopment",
      imgUrl: Microsoft,
      code: "https://github.com/VijayaragavanS1999/Microsoft-clone",
      demo: "https://vijayaragavans1999.github.io/Microsoft-clone/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ToDo,
      code: "https://github.com/VijayaragavanS1999/Track-Your-Task",
      demo: "https://vijayaragavans1999.github.io/Track-Your-Task/",
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

export default FrontendProject;
