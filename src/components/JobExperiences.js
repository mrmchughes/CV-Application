import React, { useState } from "react";
import uniqid from "uniqid";
import JobExperienceComponent from "./JobExperienceComponent";

function JobExperiences() {
  const [state, setState] = useState({
    jobExperiences: [],
    experience: { id: uniqid() },
  });

  const handleAdd = (e) => {
    e.preventDefault();

    setState({
      jobExperiences: state.jobExperiences.concat(state.experience),
      experience: { id: uniqid() },
    });
  };

  const handleDelete = (experience) => {
    setState((prevState) => ({
      jobExperiences: prevState.jobExperiences.filter(
        (el) => el !== experience
      ),
    }));
  };

  const jobExperiences = state.jobExperiences;

  return (
    <div className="experiencesDiv">
      <p className="displayP">Professional Experience</p>
      <input
        type="button"
        value="Add"
        className="experienceButton"
        onClick={handleAdd}
      />

      <ul>
        {jobExperiences.map((experience) => {
          return (
            <li key={experience.id} className="experienceItem">
              <JobExperienceComponent />
              <input
                type="button"
                value="Delete"
                className="experienceButton"
                onClick={handleDelete.bind(this, experience)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default JobExperiences;
