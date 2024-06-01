import React from "react"

export default function Figure({imageURL, date}){
    return (
      <figure>
          <img src={imageURL}/>
          <figcaption>{date}</figcaption>
      </figure>
    )}