import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperiences from "./components/EducationalExperiences";
import JobExperiences from "./components/JobExperiences";

import "./styles/app.css";
import "./styles/component.css";

class App extends Component {
  render() {
    return (
      <div className="appDiv">
        <GeneralInfo />
        <EducationalExperiences />
        <JobExperiences />
      </div>
    );
  }
}

export default App;
