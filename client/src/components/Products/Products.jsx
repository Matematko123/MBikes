import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

function Products({ children, category, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:8000/api/products?category=${category}`
            : 'http://localhost:8000/api/products'
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort == 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort == 'desc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container id="Bikes">
      <h2>Bikes</h2>
      <p>
        <b>{category}</b> <br />
        Explore our products
      </p>
      {children}
      <List>
        {category
          ? filteredProducts.map((item) => (
              <Product key={item.id} item={item} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Product kecd y={item._id} item={item} />)}
      </List>
    </Container>
  );
}

export default Products;
