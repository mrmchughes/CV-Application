import React, { useState } from "react";

function ProfessionalExperience() {
  const [state, setState] = useState({
    companyName: "",
    positionTitle: "",
    fromDate: "",
    toDate: "",
    mainTasks: "",
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
                Company Name:
                <input
                  name="companyName"
                  type="text"
                  placeholder="Company name"
                  value={state.companyName}
                  onChange={handleInputChange}
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
                  value={state.positionTitle}
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
              <label>
                Main Tasks:
                <textarea
                  name="mainTasks"
                  placeholder="Main Tasks:"
                  value={state.mainTasks}
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
            <p>Company Name: {state.companyName}</p>
            <p>Position Title: {state.positionTitle}</p>
            <p>From Date: {state.fromDate}</p>
            <p>To Date: {state.toDate}</p>
            <p>Main Tasks: {state.mainTasks}</p>
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

export default ProfessionalExperience;
