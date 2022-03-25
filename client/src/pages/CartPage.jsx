import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import SecondaryButton from 'reusable/SecondaryButton';

import img from '../img/bike1.webp';

const Container = styled.div`
  height: 110vh;

  footer {
    position: absolute;
    bottom: -15rem;
    width: 100%;
  }

  color: var(--text);
  font-weight: 500;

  @media (max-width: 768px) {
    height: 100%;

    footer {
      position: relative;
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 85%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    margin-top: 5rem;
    text-align: center;
    font-size: 5rem;
  }

  span {
    font-size: 1.6rem;
  }
`;

const ContinueShopping = styled.span`
  text-align: center;
  margin-top: -2rem;
  margin-bottom: 5rem;

  :hover {
    color: var(--text-hover);
    cursor: pointer;
  }
`;

const CartItemsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
  font-weight: 700;

  span {
    text-align: left;
  }

  * {
    width: 15rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  hr {
    height: 2px;
    background-color: var(--hr);
    border: none;
    margin-bottom: 4rem;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    width: 15rem;
  }

  span {
    text-align: left;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    * {
      width: 100%;
    }
  }
`;
const CartDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartFooter = styled.div`
  text-align: right;

  span {
    font-size: 2.2rem;
    font-weight: 600;
  }

  button {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    gap: 2rem;
  }
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    text-align: center;
  }
`;

const Estimates = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export default function CartPage() {
  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <h2>Cart</h2>
        <ContinueShopping>Continue Shopping</ContinueShopping>
        <CartItemsHeader>
          <span>Image</span>
          <span>Description</span>
          <span>Wheel Size</span>
          <span>Quantity</span>
          <span>Remove</span>
          <span>Price</span>
        </CartItemsHeader>
        <CartItems>
          <CartItem>
            <img src={img} alt="" />
            <CartDesc>
              <span>Sample Bike</span>
              <span>ID: 00032324</span>
            </CartDesc>
            <span>29er</span>
            <ProductQuantity>
              <SecondaryButton>+</SecondaryButton>
              <span>1</span>
              <SecondaryButton>-</SecondaryButton>
            </ProductQuantity>
            <SecondaryButton>x</SecondaryButton>
            <span>$1000</span>
          </CartItem>
          <hr />
          <CartItem>
            <img src={img} alt="" />
            <CartDesc>
              <span>Sample Bike</span>
              <span>ID: 00032324</span>
            </CartDesc>
            <span>29er</span>
            <ProductQuantity>
              <SecondaryButton>+</SecondaryButton>
              <span>1</span>
              <SecondaryButton>-</SecondaryButton>
            </ProductQuantity>
            <SecondaryButton>x</SecondaryButton>
            <span>$1000</span>
          </CartItem>
          <hr />
        </CartItems>
        <CartFooter>
          <Estimates>
            <span>Subtotal: $2000</span>
            <span>Estimated Shipping: $10</span>
            <span>Shipping Discount: $0</span>
            <span>Total: $2010</span>
          </Estimates>
          <SecondaryButton>Checkout</SecondaryButton>
        </CartFooter>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
}
