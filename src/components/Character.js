// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledChar = styled.p`
  background-color: "#181a1b";
  opacity: 1;
  color: "#d0ccc5";
`;

export default function Character({ character }) {
  //console.log(character);
  return <StyledChar>{character.name}</StyledChar>;
}
