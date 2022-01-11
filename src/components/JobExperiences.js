import React, { Component } from "react";
import uniqid from "uniqid";
import JobExperienceComponent from "./JobExperienceComponent";

class JobExperiences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobExperiences: [],
      experience: { id: uniqid() },
    };
  }

  handleAdd = (e) => {
    e.preventDefault();

    this.setState({
      jobExperiences: this.state.jobExperiences.concat(this.state.experience),
      experience: { id: uniqid() },
    });
  };

  handleDelete(experience) {
    this.setState((prevState) => ({
      jobExperiences: prevState.jobExperiences.filter(
        (el) => el !== experience
      ),
    }));
  }

  render() {
    const jobExperiences = this.state.jobExperiences;

    return (
      <div className="containerDiv">
        <p>Professional Experience</p>
        <input type="button" value="Add" onClick={this.handleAdd} />

        <ul>
          {jobExperiences.map((experience) => {
            return (
              <li key={experience.id}>
                <JobExperienceComponent />
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

export default JobExperiences;
