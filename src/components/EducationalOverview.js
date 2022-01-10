import React from "react";

function EducationalOverview(props) {
  const educationalExperiences = props.educationalExperiences;
  const handleSave = props.handleSave;
  const handleEdit = props.handleEdit;
  const handleInputChange = props.handleInputChange;
  const isEditing = props.isEditing;

  return (
    <ul>
      {educationalExperiences.map((educationalExperience) => {
        return (
          <li key={educationalExperience.id}>
            <div>
              <div>
                <p>School Name: {educationalExperience.schoolName}</p>
                <p>Field of Study: {educationalExperience.fieldOfStudy}</p>
                <p>From: {educationalExperience.fromDate}</p>
                <p>To: {educationalExperience.toDate}</p>

                <div>
                  <input
                    type="button"
                    value={isEditing ? "Save" : "Edit"}
                    onClick={
                      isEditing
                        ? handleSave.bind(this, educationalExperience)
                        : handleEdit.bind(this, educationalExperience)
                    }
                  />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default EducationalOverview;
