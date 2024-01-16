import ProjectCard from "./ProjectCard";
import "./Project.css";
import Microsoft from "../../img/microsoft.png";
import ToDo from "../../img/to do.png";
import Ecomify from "../../img/e-comify.png";

function FrontendProject() {
  const projects = [
    {
      title: "E-comify",
      description:
        "A fully responsive e-commerce platform which enables users to filter products by category, add items to their cart, and adjust quantities for a seamless shopping experience.",
      tech: "HTML, CSS, JAVASCRIPT, REACT.JS",
      imgUrl: Ecomify,
      code: "https://github.com/VijayaragavanS1999/Ecommerce-website",
      demo: "https://e-comify.netlify.app/",
    },
    {
      title: "Microsoft Clone",
      description:
        "Fully responsive website where you can see all the section as in Microsoft  website",
      tech: "HTML, CSS, JAVASCRIPT",
      imgUrl: Microsoft,
      code: "https://github.com/VijayaragavanS1999/Microsoft-clone",
      demo: "https://vijayaragavans1999.github.io/Microsoft-clone/",
    },
    {
      title: "Track your Task ",
      description:
        "An interactive website where you can add, strike and remove their task",
      tech: "HTML, CSS, JAVASCRIPT",
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
