import React from "react";
import { FaVolumeUp } from "react-icons/fa";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  const start = () => {
    audio.play();
  };
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button onClick={start} className="start rounded-circle mb-3">
          <FaVolumeUp className="sound-icon" />
        </button>
        <span className="phonetic-text"> {props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
