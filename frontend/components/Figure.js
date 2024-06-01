import React from "react"

export default function Figure({imageURL, date}){
    return (
      <figure>
          <img src={imageURL} alt="NASA APOD"/>
          <figcaption>{date}</figcaption>
      </figure>
    )}