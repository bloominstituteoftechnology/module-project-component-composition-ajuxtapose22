import React from "react";
import Figure from "./Figure";
import styled from 'styled-components';
import HighlightedText from "./Highlight";

const StyledCard = styled.div`
  border: 3px solid ${props => props.$borderColor || 'royalblue'};
  padding: 1em;
  border-radius: 2em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgrey;
  }

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
`;

export default function Card({title, text, image, author, date, borderColor}) {
    return (
      <StyledCard $color="royalblue" $borderColor={borderColor} className='card'>
        <h2>{title}</h2>
        <p><HighlightedText text={text} highlight={title}/></p>
        <Figure image={image} author={author} dat={date}/>
      </StyledCard>
    )}