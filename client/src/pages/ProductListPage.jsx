import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    height: 100%;
    padding-bottom: 10rem;
  }
`;

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
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (event) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar></Navbar>
      <Products category={category} filters={filters} sort={sort}>
        <FilterContainer>
          <Filter>
            <FilterText> Filter Products: </FilterText>
            <Select name="travel" onChange={handleFilters}>
              <Option disabled>Travel</Option>
              <Option value="100">100mm</Option>
              <Option value="120">120mm</Option>
              <Option value="140">140mm</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText> Sort Products: </FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Highest price first</Option>
              <Option value="desc">Lowest price first</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Products>
      <Footer></Footer>
    </Container>
  );
}
