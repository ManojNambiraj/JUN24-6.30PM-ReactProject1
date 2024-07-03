import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button_container">
      <button
        onClick={() => {
          props.foo(props.name);
        }}

        style={{backgroundColor: "Red", padding: "20px"}}

      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
