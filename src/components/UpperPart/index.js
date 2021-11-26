import React from "react";
import "./index.css";

export default function UpperPart({ number, color, name, description, icon }) {
  return (
    <div className="common-comp-container">
      <div className="num-row">
        <h1 className="num">{number}</h1>
        <i>{icon}</i>
      </div>
      <progress value="30" max="100" />
      <h1 className="name-up">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  );
}
