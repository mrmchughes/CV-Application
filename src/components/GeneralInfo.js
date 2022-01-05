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
    //alert(`
    //   __Your General Info__\n
    //    First Name: ${this.state.generalInfo.firstName}
    //    Last Name: ${this.state.generalInfo.lastName}
    //    Email: ${this.state.generalInfo.email}
    //   Phone Number: ${this.state.generalInfo.phoneNumber}
    //`);
    this.setState({ isEditing: false });
    console.log(`isEditing: ${this.state.isEditing}`);
  };

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({ isEditing: true });
  };

  render() {
    const generalInfo = this.state.generalInfo;
    const isEditing = this.state.isEditing;

    return (
      <div>
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

//isEditing = true at start, then divs populated by form on save
//if isEditing = true, display form, populating with previously displayed info as values
//if isEditing = false, display divs populated by form on save

export default GeneralInfo;
