import ProjectCard from "./ProjectCard";
import "./Project.css";
import memory from "../../img/memories.png";

function BackendProject() {
  const projects = [
    {
      title: "Developer notes ",
      description: "Design & Development",
      imgUrl: memory,
    },
  ];

  return (
    <section className="project" id="project">
      {projects.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}
    </section>
  );
}

export default BackendProject;
