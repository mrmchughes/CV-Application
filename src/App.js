import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import JobExperience from "./components/JobExperience";

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationalExperience />
        <JobExperience />
      </div>
    );
  }
}

export default App;
