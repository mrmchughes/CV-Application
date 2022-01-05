import React, { Component } from "react";

class JobExperience extends Component {
  render() {
    return (
      <div>
        <p>Job Experience </p>
        <input type="button" value="Add" />
        <form>
          <div>
            <label>
              Company Name:
              <input type="text" placeholder="Company Name" />
            </label>
          </div>

          <div>
            <label>
              Position Title:
              <input type="text" placeholder="Position Title" />
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
            <label>
              Main Tasks:
              <input type="textarea" placeholder="Main Tasks" />
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

export default JobExperience;
