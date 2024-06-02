import React from "react"
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width: 75%;
  display: block;
  align-items: center;

  figcaption {
    font-style:italic; 
  }

`


export default function Figure({image, author, date}){
    return (
      <StyledFigure>
          <img src={image} alt="NASA APOD"/>
          <figcaption>The Photo of the Day by {author} on {date}</figcaption>
      </StyledFigure>
    )}