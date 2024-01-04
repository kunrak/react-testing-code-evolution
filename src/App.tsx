import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/application";
import Greet from "./components/greet/greet";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Greet />
      <Application />
      <Skills skills={['HTML', 'CSS']} />
    </div>
  );
}

export default App;
