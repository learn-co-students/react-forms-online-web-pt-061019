import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import ParentComponent from "./components/ParentComponent";
//<ParentComponent/> should be rendered if using it for storing state
ReactDOM.render(
  <div>
    <Form />
  </div>,
  document.getElementById("root")
);
