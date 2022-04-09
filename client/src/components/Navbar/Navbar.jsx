// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import { FaShoppingCart } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { Badge } from '@material-ui/core';

import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from 'react-redux';

const Container = styled.div`
  padding: 2rem 0rem;
  font-size: 2.4rem;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  background-color: var(--primary);

  @media (max-width: 768px) {
    position: relative;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const Left = styled.div`
  color: var(--text);
  font-weight: 600;
  font-size: 4rem;
  font-style: italic;

  cursor: pointer;
  transition: all 0.15s;

  :hover {
    color: var(--text-hover);
  }
`;

const Right = styled.div``;

const Links = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  font-weight: 500;
  a {
    color: var(--text);
    text-decoration: none;
  }
  a:hover {
    color: var(--text-hover);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .badge span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Left>MBikes</Left>
        </Link>
        <Right>
          <Links>
            <Link to="/#Bikes">Bikes</Link>
            <Link to="/#AboutUs">About Us</Link>
            {/* <BsPersonFill /> */}
            <Link to="/cart">
              <Badge className="badge" badgeContent={quantity} color="primary">
                <FaShoppingCart />
              </Badge>
            </Link>
          </Links>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
