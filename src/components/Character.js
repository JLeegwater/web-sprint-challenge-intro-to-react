// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledChar = styled.h1``;

const StyledDiv = styled.div`
  padding: 8px;
  border-color: white;
  border-bottom: 2px solid white;
  border: 5px;
  border-radius: 25px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: gray;
  }
`;

export default function Character({ character }) {
  console.log(character);

  return (
    <StyledDiv>
      <StyledChar>{character.name}</StyledChar>
      <h2>Details: </h2>
      <p>Gender: {character.gender} </p>
      <p>Eye color: {character.eye_color}</p>
    </StyledDiv>
  );
}
