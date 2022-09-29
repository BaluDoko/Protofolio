import ProjectCard from "./ProjectCard";
import "./Project.css";
import memory from "../../img/memories.png";

function BackendProject() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: memory,
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

export default BackendProject;
