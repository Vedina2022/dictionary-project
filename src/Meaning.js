import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import Examples from "./Exampes";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 class="text-decoration-underline mb-4">
        <em>{props.meaning.partOfSpeech}</em>
        <span className="arrow-icon"></span>
      </h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul className="Definition">
              <li>{definition.definition}</li>
            </ul>
            <Examples example={definition.example} />
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
