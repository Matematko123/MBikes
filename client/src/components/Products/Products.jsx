import React from 'react';
import styled from 'styled-components';
import { products } from '../../data';
import Product from './Product';

const Container = styled.div`
  padding-top: 10rem;

  width: 85%;
  margin: 0 auto;

  h2,
  p {
    text-align: center;
    color: var(--text);
  }

  h2 {
    font-size: 6rem;
  }

  p {
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  margin-bottom: 5rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

function Products(props) {
  return (
    <Container id="Bikes">
      <h2>Bikes</h2>
      <p>Explore our products</p>
      {props.children}
      <List>
        {products.map((item) => (
          <Product item={item} key={item.id}></Product>
        ))}
      </List>
    </Container>
  );
}

export default Products;
