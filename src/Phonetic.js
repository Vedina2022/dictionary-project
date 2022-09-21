import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <audio controls autoplay>
        <source src={props.phonetic.audio} type="audio/mpeg" />
      </audio>
      <br />
      {props.phonetic.text}
    </div>
  );
}
