import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
//  constructor(props){
//   super(props);
//   this.state = {
//     firstName: "",
//     lastName: "",
//   }
// }

//Same thing as constructor()
state = {
    firstName: "",
    lastName: "",
    submittedData: []
}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault() //The default behavior of a form is to try and submit the form data based on a defined action, causing a redirect.
    let formData = { firstName: this.state.firstName,
                     lastName: this.state.lastName 
                  }  //put current form data using the values stored in state
  //  this.sendFormDataSomewhere(formData)  // handle requests with asynchronous js - send data to server or another page
  //  console.log(formData)
   let dataArray = this.state.submittedData.concat(formData)
   this.setState({submittedData: dataArray})
   }

   listOfSubmissions = () =>{
    return this.state.submittedData.map(data => {
      return <div key={data}><span>{data.firstName}</span><span>{data.lastName}</span></div>
    })
  }
 
  render() {
    return (
      <div>
      <Form
        formData={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        listOfSubmissions={this.listOfSubmissions}
      />
      <DisplayData formData={this.state}/>
      </div>
    )
  }
}
 
export default ParentComponent;