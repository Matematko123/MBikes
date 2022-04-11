import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--text);
  padding: 1rem 2rem;
  border: solid 2px transparent;
  color: white;

  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 2.2rem;

  :hover {
    background-color: transparent;
    border: solid 2px black;
    color: black;
  }

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

function SecondaryButton(props) {
  return (
    <Button onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </Button>
  );
}

export default SecondaryButton;
