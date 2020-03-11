import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

 
class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
 
// REFACTORED:

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
// NOT DRY:
//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }
 
//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }
 
  render() {
    return (
        <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        //   handleFirstNameChange={this.handleFirstNameChange}
        //   handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}
 
export default ParentComponent;

// Aside: Submission functionality is omitted here for simplicity