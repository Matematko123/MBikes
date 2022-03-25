import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--primary);
  padding: 1.2rem 3.6rem;
  color: white;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: var(--primary-hover);
  }
`;

function PrimaryButton(props) {
  return <Button>{props.children}</Button>;
}

export default PrimaryButton;
