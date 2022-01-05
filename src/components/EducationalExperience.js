import React, { Component } from "react";

class EducationalExperience extends Component {
  render() {
    return (
      <div>
        <p>Educational Experience</p>
        <input type="button" value="Add" />
        <form>
          <div>
            <label>
              School Name:
              <input type="text" placeholder="School name" />
            </label>
          </div>

          <div>
            <label>
              Field of Study:
              <input type="text" placeholder="Field of Study" />
            </label>
          </div>

          <div>
            <label>
              From:
              <input type="text" placeholder="From Date" />
            </label>
          </div>

          <div>
            <label>
              To:
              <input type="text" placeholder="To Date" />
            </label>
          </div>

          <div>
            <input type="button" value="Edit" />
          </div>

          <div>
            <input type="button" value="Save" />
            <input type="button" value="Delete" />
          </div>
        </form>
      </div>
    );
  }
}

export default EducationalExperience;
