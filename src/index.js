import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './components/ParentComponent';
 
ReactDOM.render(
  <div>
    <ParentComponent/>
  </div>,
  document.getElementById('root')
);

// BEFORE:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Form from './components/Form'

// ReactDOM.render(
//   <div>
//     <Form />
//   </div>,
//   document.getElementById('root')