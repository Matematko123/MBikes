import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;

  color: var(--text);
  transition: all 0.4s ease-out;

  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Container = styled.div`
  width: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--item);
  padding: 2rem;

  position: relative;

  :hover {
    border-radius: 1rem;
  }

  &:hover ${Info} {
    cursor: pointer;
    opacity: 1;
  }

  img {
    width: 100%;
    z-index: 2;
  }

  * {
    color: var(--text);
  }
`;

const Icon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: white;

  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;

const BikeName = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--text);
`;

const BikeDesc = styled.span`
  font-size: 1.6rem;
  color: var(--text);
`;

function Product({ item }) {
  return (
    <Container>
      <img src={item.img} alt="" />
      <Info>
        <Icon>
          <FaShoppingCart></FaShoppingCart>
        </Icon>
        <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
          <Icon>
            <FaSearch></FaSearch>
          </Icon>
        </Link>
        <Icon>
          <FaHeart></FaHeart>
        </Icon>
      </Info>
      <BikeName>{item.title}</BikeName>
      <BikeDesc>
        Travel: {item.travel} | Wheel Size: {item.wheel} | {item.price} $
      </BikeDesc>
    </Container>
  );
}

export default Product;
