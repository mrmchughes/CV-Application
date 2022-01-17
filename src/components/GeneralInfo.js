import React, { useState } from "react";

function GeneralInfo() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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
    <div className="experiencesDiv">
      <p className="displayP">General Information </p>
      <div className="experienceItem">
        {state.isEditing ? (
          <form>
            <div>
              <label>
                First Name:
                <input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={state.firstName}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div>
              <label>
                Last Name:
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={state.lastName}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div>
              <label>
                Email:
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div>
              <label>
                Phone Number:
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number:"
                  value={state.phoneNumber}
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
            <p>First Name: {state.firstName}</p>
            <p>Last Name: {state.lastName}</p>
            <p>Email: {state.email}</p>
            <p>Phone Number: {state.phoneNumber}</p>
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

export default GeneralInfo;
