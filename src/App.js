import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import "./App.css";
import educations from "./Components/Education/educations";
import Skills from "./Components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <hr />
      <h1 className="common">Education History</h1>
      {educations.map((edu) => (
        <Education
          title={edu.title}
          year={edu.year}
          where1={edu.where1}
          where2={edu.where2}
          cgpa={edu.cgpa}
          mark={edu.mark}
        />
      ))}
      <hr />

      <Skills />
    </div>
  );
}

export default App;
