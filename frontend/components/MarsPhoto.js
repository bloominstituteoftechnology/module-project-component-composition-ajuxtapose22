import React from "react";
import Figure from "./Figure";

export default function MarsPhoto({ roverName, imgSrc, earthDate }) {
  return (
    <div>
      <h1>{roverName}</h1>
      <Figure imageURL={imgSrc} date={earthDate} />
    </div>
  );
}