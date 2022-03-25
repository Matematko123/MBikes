import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SecondaryButton from 'reusable/SecondaryButton';

import bike1 from '../img/bike1.webp';

const Container = styled.div`
  position: relative;
  height: 110vh;
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
  padding-top: 4rem;
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
  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <Left>
          <h2>Santa Cruz Nomad</h2>
          <img src={bike1} alt="" />
          <Stats>
            <Text>
              <TextBlock>
                <h4>Battery range</h4>
                <span>22 miles</span>
              </TextBlock>
              <TextBlock>
                <h4>Charging time</h4>
                <span>2H</span>
              </TextBlock>
              <TextBlock>
                <h4>Assist speed</h4>
                <span>32 kmph</span>
              </TextBlock>
              <TextBlock>
                <h4>Weight</h4>
                <span>10 kg</span>
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
            <b>Wheel Size:</b> <br /> MX
          </span>
          <span>
            <b>Top Speed:</b> <br /> 50 kmph
          </span>
          <span>
            <b>Battery life:</b> <br /> 2H
          </span>
          <span>
            <b>Front Travel:</b> <br /> 170mm
          </span>
          <span>
            <b>Description:</b> <br /> The Bullit is an electric mountain bike
            designed for tackling the steepest and deepest of trails in both
            directions. Imagine the kinds of rooty, rocky, horror fests usually
            reserved for our biggest hitting bikes like the Nomad and Megatower.
            Then imagine what lies beyond that.
          </span>
          <Price>$ 1999</Price>
          <SecondaryButton>Add to Cart</SecondaryButton>
        </Right>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
}
