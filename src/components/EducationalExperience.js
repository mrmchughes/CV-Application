import React, { Component } from "react";
import uniqid from "uniqid";

import EducationExperienceComponent from "./EducationExperienceComponent";

class EducationalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationalExperiences: [],
      experience: { id: uniqid() },
    };
  }

  handleAdd = (e) => {
    e.preventDefault();

    this.setState({
      educationalExperiences: this.state.educationalExperiences.concat(
        this.state.experience
      ),
      experience: { id: uniqid() },
    });
  };

  render() {
    const educationalExperiences = this.state.educationalExperiences;

    return (
      <div>
        <p>Educational Experiences</p>
        <input type="button" value="Add" onClick={this.handleAdd} />

        <ul>
          {educationalExperiences.map((experience) => {
            return (
              <li key={experience.id}>
                <EducationExperienceComponent />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EducationalExperience;
