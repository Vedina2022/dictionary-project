import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="ms-3">
        {" "}
        <strong className="me-2"> Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <p key={index} className="Synonyms me-3">
              {synonym}
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
