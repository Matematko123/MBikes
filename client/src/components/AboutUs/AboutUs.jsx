import React from 'react';
import styled from 'styled-components';

import shop1 from '../../img/shop1.jpg';
import shop2 from '../../img/shop2.jpg';
import shop3 from '../../img/shop3.jpg';

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
    margin-bottom: 8rem;
  }
  margin-bottom: 10rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;

  img {
    height: 60rem;
  }

  img:hover {
    transform: scale(1.05);
  }
`;
function AboutUs() {
  return (
    <Container id="AboutUs">
      <h2>About Us</h2>
      <p>
        MBikes shops are your destination for the latest Santa Cruz bikes.
        Whether you visit a MBikes-owned store or one of our awesome independent
        partners, you’ll find amazing service, knowledgeable staff, and
        top-quality bikes and gear that you’ll enjoy for years to come.
      </p>
      <ImageContainer>
        <img src={shop1} alt="" />
        <img src={shop2} alt="" />
        <img src={shop3} alt="" />
      </ImageContainer>
    </Container>
  );
}

export default AboutUs;
