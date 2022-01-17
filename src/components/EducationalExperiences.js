import React, { useState } from "react";
import uniqid from "uniqid";
import EducationExperienceComponent from "./EducationExperienceComponent";

function EducationalExperiences() {
  const [state, setState] = useState({
    educationalExperiences: [],
    experience: { id: uniqid() },
  });

  const handleAdd = (e) => {
    e.preventDefault();

    setState({
      educationalExperiences: state.educationalExperiences.concat(
        state.experience
      ),
      experience: { id: uniqid() },
    });
  };

  const handleDelete = (experience) => {
    setState((prevState) => ({
      educationalExperiences: prevState.educationalExperiences.filter(
        (el) => el !== experience
      ),
    }));
  };

  const educationalExperiences = state.educationalExperiences;

  return (
    <div className="experiencesDiv">
      <p className="displayP">Educational Experience</p>
      <input
        type="button"
        value="Add"
        className="experienceButton"
        onClick={handleAdd}
      />

      <ul>
        {educationalExperiences.map((experience) => {
          return (
            <li key={experience.id} className="experienceItem">
              <EducationExperienceComponent />
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

export default EducationalExperiences;
