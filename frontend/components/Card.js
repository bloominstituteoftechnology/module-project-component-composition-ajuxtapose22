import React from "react";
import Figure from "./Figure"
import styled from 'styled-components'

const StyledCard = styled.div`
  border: 2px solid black;
  padding: 1em;
  border-radius: 2em;

  h2 {
    color: ${props => props.$color};
    font-size: 2em;
    margin: 0 0 1rem 0;
  }
 p {
  margin: 0;

  &::first-line {
    font-size: 1.5em;
  }
 }
`

export default function Card({title, text, image, author, date}) {
    return (
      <StyledCard $color="orange" className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure image={image} author={author} dat={date}/>
      </StyledCard>
    )}