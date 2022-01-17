import React, { useState } from "react";

function EducationalExperience() {
  const [state, setState] = useState({
    schoolName: "",
    fieldOfStudy: "",
    fromDate: "",
    toDate: "",
    isEditing: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      isEditing: false,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      isEditing: true,
    }));
  };

  return (
    <div>
      <div>
        {state.isEditing ? (
          <form>
            <div>
              <label>
                School Name:
                <input
                  name="schoolName"
                  type="text"
                  placeholder="School name"
                  value={state.schoolName}
                  onChange={handleInputChange}
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
                  value={state.fieldOfStudy}
                  onChange={handleInputChange}
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
                  value={state.fromDate}
                  onChange={handleInputChange}
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
                  value={state.toDate}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div>
              <input
                type="button"
                value="Save"
                className="experienceButton"
                onClick={handleSave}
              />
            </div>
          </form>
        ) : (
          <div>
            <p>School Name: {state.schoolName}</p>
            <p>Field of Study: {state.fieldOfStudy}</p>
            <p>From Date: {state.fromDate}</p>
            <p>To Date: {state.toDate}</p>
            <div>
              <input
                type="button"
                value="Edit"
                className="experienceButton"
                onClick={handleEdit}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EducationalExperience;
