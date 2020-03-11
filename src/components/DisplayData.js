// another component, a sibling of Form, that live displays our form data

import React from 'react';
 
class DisplayData extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.formData.firstName}</h1>
        <h1>{this.props.formData.lastName}</h1>
      </div>
    )
  }
}
 
export default DisplayData