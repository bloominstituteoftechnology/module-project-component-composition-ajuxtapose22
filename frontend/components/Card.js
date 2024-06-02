import React from "react";
import Figure from "./Figure"
import Styled from 

export default function Card({title, text, image, author, date}) {
    return (
      <div className='card'>
        <h1>{title}</h1>
        <p>{text}</p>
        <Figure image={image} author={author} dat={date}/>
      </div>
    )}