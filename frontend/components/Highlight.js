import React from 'react';
import styled from 'styled-components';

const Highlight = styled.span`
  font-weight: bold;
  color: royalblue;
`;

const HighlightedText = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Highlight key={index}>{part}</Highlight>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default HighlightedText;
