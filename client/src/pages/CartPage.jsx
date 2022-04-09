import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import SecondaryButton from 'reusable/SecondaryButton';

import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, clearAllProducts } from '../redux/cartRedux';
import { HashLink as Link } from 'react-router-hash-link';

import { useNavigate } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

import { publicRequest } from '../requestMethods';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 0rem;
  color: var(--text);
  font-weight: 500;

  /* padding-bottom: 7rem; */

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

  a {
    text-decoration: none;
    color: black;
    text-align: center;
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
  margin-bottom: 10rem;
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
  // @ts-ignore
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const [orderDone, setOrderDone] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function removeItemFromCart(product) {
    dispatch(removeProduct({ product, price: product.price }));
  }

  function onToken(token) {
    setStripeToken(token);
  }

  useEffect(() => {
    stripeToken && dispatch(clearAllProducts());
    stripeToken && setOrderDone(true);

    async function addOrder() {
      console.log(stripeToken);
      publicRequest.post('/orders/', {
        name: stripeToken.card.name,
        email: stripeToken.email,
        products: cart.products,
        address: `${stripeToken.card.address_country}, ${stripeToken.card.address_city}, ${stripeToken.card.address_line1}`,
      });
    }
    stripeToken && addOrder();
  }, [stripeToken]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <h2>Cart</h2>
        <Link to="/#Bikes">
          <ContinueShopping>Continue Shopping</ContinueShopping>
        </Link>

        {cart.products.length ? (
          <>
            <CartItemsHeader>
              <span>Image</span>
              <span>Description</span>
              <span>Wheel Size</span>
              <span>Remove</span>
              <span>Price</span>
            </CartItemsHeader>
            <CartItems>
              {cart.products.map((product) => (
                <>
                  <CartItem>
                    <img src={product.img} alt="" />
                    <CartDesc>
                      <span>{product.title}</span>
                      <span>ID: {product._id}</span>
                    </CartDesc>
                    <span>{product.wheel}</span>

                    <SecondaryButton
                      onClick={() => removeItemFromCart(product)}
                    >
                      x
                    </SecondaryButton>
                    <span>{product.price}$</span>
                  </CartItem>
                  <hr />
                </>
              ))}
            </CartItems>
            <CartFooter>
              <Estimates>
                <span>Subtotal: ${cart.total}</span>
                <span>Estimated Shipping: $50</span>
                <span>Shipping Discount: $0</span>
                <span>Total: ${cart.total + 50}</span>
              </Estimates>
              <StripeCheckout
                shippingAddress
                name="MBikes"
                description={`Your total is $${cart.total + 50}`}
                amount={(cart.total + 50) * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <SecondaryButton>Checkout</SecondaryButton>
              </StripeCheckout>
            </CartFooter>
          </>
        ) : (
          !orderDone && <h2> Add something to cart!</h2>
        )}
        {orderDone && (
          <h2>
            Thank you for your order! <br /> <br />
            We're processing it now. <br /> You will recieve email with delivery
            details!
          </h2>
        )}
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
}
