import React, { Component } from "react";

class ProfessionalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: true,
      professionalExperience: {
        companyName: "",
        positionTitle: "",
        fromDate: "",
        toDate: "",
        mainTasks: "",
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState((prevState) => ({
      professionalExperience: {
        ...prevState.professionalExperience,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  };

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({ isEditing: true });
  };

  render() {
    const professionalExperience = this.state.professionalExperience;
    const isEditing = this.state.isEditing;

    return (
      <div>
        <div>
          {isEditing ? (
            <form>
              <div>
                <label>
                  Company Name:
                  <input
                    name="companyName"
                    type="text"
                    placeholder="Company name"
                    value={professionalExperience.companyName}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  Position Title:
                  <input
                    name="positionTitle"
                    type="text"
                    placeholder="Position Title"
                    value={professionalExperience.positionTitle}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  From Date:
                  <input
                    name="fromDate"
                    type="text"
                    placeholder="From Date"
                    value={professionalExperience.fromDate}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  To Date:
                  <input
                    name="toDate"
                    type="text"
                    placeholder="To Date:"
                    value={professionalExperience.toDate}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  Main Tasks:
                  <textarea
                    name="mainTasks"
                    placeholder="Main Tasks:"
                    value={professionalExperience.mainTasks}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div>
                <input
                  type="button"
                  value="Save"
                  className="experienceButton"
                  onClick={this.handleSave}
                />
              </div>
            </form>
          ) : (
            <div>
              <p>Company Name: {professionalExperience.companyName}</p>
              <p>Position Title: {professionalExperience.positionTitle}</p>
              <p>From Date: {professionalExperience.fromDate}</p>
              <p>To Date: {professionalExperience.toDate}</p>
              <p>Main Tasks: {professionalExperience.mainTasks}</p>
              <div>
                <input
                  type="button"
                  value="Edit"
                  className="experienceButton"
                  onClick={this.handleEdit}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfessionalExperience;
