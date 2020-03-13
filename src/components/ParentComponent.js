import React, { Component } from "react";
import Form from "./Form";
import DisplaysData from "./DisplaysData";

export default class ParentComponent extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  //missing submission functionality
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplaysData formData={this.state} />
      </div>
    );
  }
}
