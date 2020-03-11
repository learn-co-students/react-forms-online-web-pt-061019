import React from 'react';
 
class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
        {/* REFACTORED */}
        <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}/>
            // value={this.props.formData.lastName} />

          {/* <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          /> */}
        </form>
      </div>
    )
  }
}
 
export default Form;





// BEFORE:

// import React from 'react';
 
// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry",
//     submittedData: []
//   }
 
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
 
//   // Controlled form
//   handleSubmit = event => {
//     event.preventDefault()
//     let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
//     let dataArray = this.state.submittedData.concat(formData)
//     this.setState({submittedData: dataArray})
//   }

// //  Uncontrolled form
// //   handleSubmit = event => {
// //   event.preventDefault()
// //   const firstName = event.target.children[0].value
// //   const lastName = event.target.children[1].value
// //   this.sendFormDataSomewhere({ firstName, lastName })
// // }
 
//   listOfSubmissions = () => {
//     return this.state.submittedData.map(data => {
//       return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
//     })
//   }
 
//   render() {
//     return (
//       <div>
//         <form onSubmit={event => this.handleSubmit(event)}>
//           <input
//             type="text"
//             onChange={event => this.handleFirstNameChange(event)}
//             value={this.state.firstName}
//           />
//           <input
//             type="text"
//             onChange={event => this.handleLastNameChange(event)}
//             value={this.state.lastName}
//           />
//           <input type="submit"/>
//         </form>
//         {this.listOfSubmissions()}
//       </div>
//     )
//   }
// }
 
// export default Form;