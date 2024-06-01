import React from "react";
import Figure from "./Figure"

export default function Card({title, text, imageURL, date}) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <Figure
          imageURL={imageURL}
          date={date}
        />
      </div>
    )}