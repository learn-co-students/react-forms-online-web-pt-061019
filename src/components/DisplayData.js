import React from 'react';

class DisplayData extends React.Component {
  render() {
    return (
      <div>
        {this.props.listOfSubmissions()}
      </div>
    )
  }
}

export default DisplayData
