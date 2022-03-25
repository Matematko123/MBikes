import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Filter = styled.div``;

const FilterText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 1rem;
`;

const Select = styled.select`
  margin-bottom: 4rem;
  padding: 0.5rem 1rem;
  border: 2px solid black;
  font-weight: 900;
`;

const Option = styled.option`
  border: 2px solid black;
  font-weight: 700;
`;

export default function ProductListPage() {
  return (
    <Container>
      <Navbar></Navbar>
      <Products>
        <FilterContainer>
          <Filter>
            <FilterText> Filter Products: </FilterText>
            <Select>
              <Option disabled selected>
                Tyre size
              </Option>
              <Option>29er</Option>
              <Option>27.5er</Option>
              <Option>26er</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText> Sort Products: </FilterText>
            <Select>
              <Option disabled selected>
                Price
              </Option>
              <Option>Highest first</Option>
              <Option>Lowest first</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Products>
      <Footer></Footer>
    </Container>
  );
}
