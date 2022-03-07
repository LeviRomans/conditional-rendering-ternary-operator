import React from "react";

function Button(props) {
  return <button type={props.type}>{props.buttonTxt}</button>;
}

export default Button;
