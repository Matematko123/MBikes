import styled from 'styled-components';

import CategoryItem from './CategoryItem';
import { categories } from '../../data';
import React from 'react';

const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  h2,
  span {
    text-align: center;
    color: var(--text);
  }

  h2 {
    font-size: 6rem;
  }

  span {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 4rem;
`;

function Categories() {
  return (
    <Container>
      <h2>Explore categories</h2>
      <span>
        See the full lineup of mountain bikes, ebikes, and gravel bikes.
      </span>
      <List>
        {categories.map((item) => {
          return <CategoryItem item={item} key={item.id} />;
        })}
      </List>
    </Container>
  );
}

export default Categories;
