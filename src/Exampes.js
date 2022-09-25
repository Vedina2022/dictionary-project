import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className=" m-3">
        <strong>Example: </strong>
        <span className="Examples">{props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}
