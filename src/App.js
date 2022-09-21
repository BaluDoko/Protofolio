import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import "./App.css";
import educations from "./Components/Education/educations";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <hr style={{ width: "1200px" }} />
      <h1 className="edu">Education History</h1>
      {/* <Education /> */}
      {educations.map((edu) => (
        <Education
          title={edu.title}
          year={edu.year}
          where1={edu.where1}
          where2={edu.where2}
          cgpa={edu.cgpa}
          mark={edu.mark}

          // where1: "University College of Engineering,",
          // where2: "BIT campus, Anna University, Tiruchirappalli",
          // cgpa: "Cumulative Grade Point Average :",
          // mark: "8.38 /10"
        />
      ))}
    </div>
  );
}

export default App;
