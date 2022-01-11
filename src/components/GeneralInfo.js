import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: true,
      generalInfo: { firstName: "", lastName: "", email: "", phoneNumber: "" },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState((prevState) => ({
      generalInfo: {
        ...prevState.generalInfo,
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
    const generalInfo = this.state.generalInfo;
    const isEditing = this.state.isEditing;

    return (
      <div className="containerDiv">
        <p>General Information </p>
        <div>
          {isEditing ? (
            <form>
              <div>
                <label>
                  First Name:
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={generalInfo.firstName}
                    onChange={this.handleInputChange}
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
                    value={generalInfo.lastName}
                    onChange={this.handleInputChange}
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
                    value={generalInfo.email}
                    onChange={this.handleInputChange}
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
                    value={generalInfo.phoneNumber}
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
              <p>First Name: {generalInfo.firstName}</p>
              <p>Last Name: {generalInfo.lastName}</p>
              <p>Email: {generalInfo.email}</p>
              <p>Phone Number: {generalInfo.phoneNumber}</p>
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
