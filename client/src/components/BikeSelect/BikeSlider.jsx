import styled from 'styled-components';
import PrimaryButton from '../../reusable/PrimaryButton.jsx';

import BikeSelector from './BikeSelector';

import bike1 from '../../img/bike1.webp';
import bike2 from '../../img/bike2.webp';
import bike3 from '../../img/bike3.webp';

import Slider from 'react-slick';
import React from 'react';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;

  padding-top: 16rem;

  display: flex;
  gap: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 6.4rem;
    font-style: italic;
    color: var(--text);
  }
  p {
    font-size: 2.4rem;
    color: var(--text);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  a {
    font-size: 1.8rem;
    color: var(--text);
    text-decoration: none;
  }

  a:hover {
    color: var(--primary);
  }
`;

const Right = styled.div`
  margin-top: -4rem;
  width: 55%;

  @media (max-width: 768px) {
    margin-top: 5rem;
    width: 100%;
  }
`;

const PrimaryText = styled.span`
  color: var(--primary);
`;

function BikeSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <h2>
            Take Over the Streets, <br /> <PrimaryText>Silently</PrimaryText> .
          </h2>
          <p>
            Join the revolution to make a difference for <br /> your life and
            the environment.
          </p>
          <Buttons>
            <PrimaryButton>Shop now</PrimaryButton>
            <a href="">Learn More</a>
          </Buttons>
        </Left>
        <Right>
          <Slider {...settings}>
            <BikeSelector
              img={bike1}
              battery={'30 km'}
              charging={'1H'}
              speed={'30'}
              weight={'10'}
            ></BikeSelector>
            <BikeSelector
              img={bike2}
              battery={'20 km'}
              charging={'2H'}
              speed={'40'}
              weight={'20'}
            ></BikeSelector>
            <BikeSelector
              img={bike3}
              battery={'10 km'}
              charging={'30 min'}
              speed={'20'}
              weight={'10'}
            ></BikeSelector>
          </Slider>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default BikeSlider;
