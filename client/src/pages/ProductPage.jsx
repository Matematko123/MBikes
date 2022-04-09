import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SecondaryButton from 'reusable/SecondaryButton';

import bike1 from '../img/bike1.webp';

import { publicRequest } from '../requestMethods.js';
import { useLocation } from 'react-router-dom';

import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  footer {
    position: absolute;
    bottom: -6rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  padding-top: 5rem;
  width: 85%;
  margin: 0 auto;

  padding-bottom: 10rem;

  h2 {
    font-size: 4rem;
    text-align: center;
    color: var(--text);
  }

  display: flex;
  justify-content: space-evenly;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 65%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: right;

  width: 35%;

  span {
    font-size: 1.6rem;
  }

  span b {
    font-size: 2rem;
  }

  h2 {
    text-align: right;
  }

  button {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    width: 100%;

    h2 {
      text-align: center;
    }
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const Text = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;

  color: var(--text);
  font-weight: bold;
  font-size: 1.8rem;

  span {
    font-weight: 900;
    font-size: 2.4rem;
  }
`;

const Stats = styled.div`
  margin-bottom: 4rem;
`;

const Price = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
`;

export default function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    title: 'sample',
    img: bike1,
    battery: 'test',
    speed: 'test',
    weight: 'test',
    wheel: 'test',
    travel: 'test',
    desc: 'test',
    price: 'test',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  const handleCartButton = () => {
    dispatch(addProduct({ product, price: product.price }));
  };

  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <Left>
          <h2>{product.title}</h2>
          <img src={product.img} alt="" />
          <Stats>
            <Text>
              <TextBlock>
                <h4>Battery range</h4>
                <span>{product.battery} miles</span>
              </TextBlock>
              <TextBlock>
                <h4>Charging time</h4>
                <span>{product.battery} min</span>
              </TextBlock>
              <TextBlock>
                <h4>Assist speed</h4>
                <span>{product.speed} kmph</span>
              </TextBlock>
              <TextBlock>
                <h4>Weight</h4>
                <span>{product.weight} kg</span>
              </TextBlock>
            </Text>
          </Stats>
        </Left>
        <Right>
          <h2>Key Features:</h2>
          <span>
            <b>Available in:</b> <br /> Carbon CC
          </span>
          <span>
            <b>Wheel Size:</b> <br /> {product.wheel}
          </span>
          <span>
            <b>Top Speed:</b> <br /> {product.speed} kmph
          </span>
          <span>
            <b>Charging time:</b> <br /> {product.battery} min
          </span>
          <span>
            <b>Front Travel:</b> <br /> {product.travel} mm
          </span>
          <span>
            <b>Description:</b> <br /> {product.desc}
          </span>
          <Price>$ {product.price}</Price>
          <SecondaryButton onClick={handleCartButton}>
            Add to Cart
          </SecondaryButton>
        </Right>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
}
