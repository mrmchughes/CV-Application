import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: true,
      educationalExperience: {
        schoolName: "",
        fieldOfStudy: "",
        fromDate: "",
        toDate: "",
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState((prevState) => ({
      educationalExperience: {
        ...prevState.educationalExperience,
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
    const educationalExperience = this.state.educationalExperience;
    const isEditing = this.state.isEditing;

    return (
      <div>
        <p>General Information </p>

        <div>
          {isEditing ? (
            <form>
              <div>
                <label>
                  School Name:
                  <input
                    name="schoolName"
                    type="text"
                    placeholder="School name"
                    value={educationalExperience.schoolName}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  Field of Study:
                  <input
                    name="fieldOfStudy"
                    type="text"
                    placeholder="Field of Study"
                    value={educationalExperience.fieldOfStudy}
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
                    value={educationalExperience.fromDate}
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
                    value={educationalExperience.toDate}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div>
                <input type="button" value="Save" onClick={this.handleSave} />
              </div>
            </form>
          ) : (
            <div>
              <p>School Name: {educationalExperience.schoolName}</p>
              <p>Field of Study: {educationalExperience.fieldOfStudy}</p>
              <p>To Date: {educationalExperience.toDate}</p>
              <p>From Date: {educationalExperience.fromDate}</p>
              <div>
                <input type="button" value="Edit" onClick={this.handleEdit} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
