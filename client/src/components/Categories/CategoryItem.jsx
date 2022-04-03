import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: bold;
  font-size: 2rem;
  gap: 1rem;

  justify-content: center;
  align-items: center;
  text-decoration: 'none';
`;

const Button = styled.button`
  background-color: var(--text);
  padding: 1rem 2rem;
  border: solid 2px transparent;
  color: white;

  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 2.2rem;

  width: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: transparent;
    border: solid 2px black;
    color: black;
  }
`;

function CategoryItem({ item }) {
  return (
    <Link to={`/products/${item.cat}`}>
      <Container>
        <img src={item.img} alt="" />
        <span>{item.title}</span>
        <Button>Shop Now</Button>
      </Container>
    </Link>
  );
}

export default CategoryItem;
