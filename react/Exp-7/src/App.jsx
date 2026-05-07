import React from "react";
import StudentCard from "./StudentCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="heading">
        Student Card
      </h1>

      <StudentCard name="Aarav" marks={30} grade="A" />
      <StudentCard name="Arnav" marks={40} grade="A" />
      <StudentCard name="Bob" marks={50} grade="B" />
    </div>
  );
}

export default App;