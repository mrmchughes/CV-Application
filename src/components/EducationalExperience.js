import React, { Component } from "react";
import uniqid from "uniqid";
import EducationExperienceComponent from "./EducationExperienceComponent";

class EducationalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      educationalExperience: {
        //isEditing: false,
        schoolName: "",
        fieldOfStudy: "",
        fromDate: "",
        toDate: "",
        id: uniqid(),
      },
      educationalExperiences: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange = (e) => {
    console.log(
      "e.target.name: " + e.target.name + " e.target.value: " + e.target.value
    );

    this.setState((prevState) => ({
      educationalExperience: {
        ...prevState.educationalExperience,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleAdd = (e) => {
    e.preventDefault();

    console.log(
      "educationalExperience-isEditing: " +
        this.state.educationalExperience.isEditing +
        " educationalExperience.schoolName: " +
        this.state.educationalExperience.schoolName +
        " educationalExperience.fieldOfStudy: " +
        this.state.educationalExperience.fieldOfStudy +
        " educationalExperience.fromDate: " +
        this.state.educationalExperience.fromDate +
        " educationalExperience.toDate: " +
        this.state.educationalExperience.toDate +
        " educationalExperience.id: " +
        this.state.educationalExperience.id
    );

    this.setState({
      educationalExperiences: this.state.educationalExperiences.concat(
        this.state.educationalExperience
      ),
      educationalExperience: {
        schoolName: "",
        fieldOfStudy: "",
        fromDate: "",
        toDate: "",
        id: uniqid(),
      },
    });
  };

  handleSave = (educationalExperience) => {
    this.setState({ isEditing: false });
    //this.setState({ educationalExperience: { isEditing: false } });

    //this.setState((prevState) => ({
    //  educationalExperience: {
    //    ...prevState.educationalExperience.isEditing,
    //    isEditing: false,
    //  },
    //}));

    //this.setState({
    //  educationalExperience: {
    //    isEditing: false,
    //  },
    //});

    //this.setState((prevState) => ({
    //  educationalExperience:
    //    (prevState.educationalExperience.isEditing = false),
    //}));

    //let isEditingvariable = educationalExperience.isEditing;
    //isEditingvariable = false;
    //this.setState({ educationalExperience: { isEditing: isEditingvariable } });

    //this.setState({ [e.target.name]: e.target.value });

    console.log(
      "HANDLE SAVE educationalExperience-isEditing: " +
        educationalExperience.isEditing +
        " educationalExperience.schoolName: " +
        educationalExperience.schoolName +
        " educationalExperience.fieldOfStudy: " +
        educationalExperience.fieldOfStudy +
        " educationalExperience.fromDate: " +
        educationalExperience.fromDate +
        " educationalExperience.toDate: " +
        educationalExperience.toDate +
        " educationalExperience.id: " +
        educationalExperience.id
    );
  };

  handleEdit = (educationalExperience) => {
    this.setState({ isEditing: true });
    //this.setState({ educationalExperience: { isEditing: true } });

    //this.setState((prevState) => ({
    //  educationalExperience: {
    //    ...prevState.educationalExperience.isEditing,
    //    isEditing: true,
    //  },
    //}));

    //this.setState({
    //  educationalExperience: {
    //    isEditing: true,
    //  },
    //});

    //let isEditingvariable = educationalExperience.isEditing;
    //isEditingvariable = true;
    //this.setState({ educationalExperience: { isEditing: isEditingvariable } });

    //this.setState((prevState) => ({
    //  isEditingvariable: (prevState.educationalExperience.isEditing = true),
    //}));

    console.log(
      "HANDLE EDIT educationalExperience-isEditing: " +
        educationalExperience.isEditing +
        " educationalExperience.schoolName: " +
        educationalExperience.schoolName +
        " educationalExperience.fieldOfStudy: " +
        educationalExperience.fieldOfStudy +
        " educationalExperience.fromDate: " +
        educationalExperience.fromDate +
        " educationalExperience.toDate: " +
        educationalExperience.toDate +
        " educationalExperience.id: " +
        educationalExperience.id
    );
  };

  render() {
    const educationalExperiences = this.state.educationalExperiences;
    const isEditing = this.state.isEditing;

    return (
      <div>
        <p>Educational Experience</p>
        <input type="button" value="Add" onClick={this.handleAdd} />

        <ul>
          {educationalExperiences.map((educationalExperience) => {
            return (
              <li key={educationalExperience.id}>
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
                      <input
                        type="button"
                        value="Save"
                        onClick={this.handleSave.bind(
                          this,
                          educationalExperience
                        )}
                      />
                    </div>
                  </form>
                ) : (
                  <div>
                    <p>School Name: {educationalExperience.schoolName}</p>
                    <p>Field of Study: {educationalExperience.fieldOfStudy}</p>
                    <p>To Date: {educationalExperience.toDate}</p>
                    <p>From Date: {educationalExperience.fromDate}</p>
                    <div>
                      <input
                        type="button"
                        value="Edit"
                        onClick={this.handleEdit.bind(
                          this,
                          educationalExperience
                        )}
                      />
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EducationalExperience;
