import React, { Component } from "react";
import uniqid from "uniqid";
import EducationExperienceComponent from "./EducationExperienceComponent";

class EducationalExperiences extends Component {
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

  handleDelete(experience) {
    this.setState((prevState) => ({
      educationalExperiences: prevState.educationalExperiences.filter(
        (el) => el !== experience
      ),
    }));
  }

  render() {
    const educationalExperiences = this.state.educationalExperiences;

    return (
      <div className="experiencesDiv">
        <p>Educational Experience</p>
        <input type="button" value="Add" onClick={this.handleAdd} />

        <ul>
          {educationalExperiences.map((experience) => {
            return (
              <li key={experience.id} className="experienceItem">
                <EducationExperienceComponent />
                <input
                  type="button"
                  value="Delete"
                  onClick={this.handleDelete.bind(this, experience)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EducationalExperiences;
