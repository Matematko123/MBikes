import React from 'react';

import styled from 'styled-components';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Container = styled.footer`
  background-color: black;
  color: white;
  height: 6rem;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;

  *:hover {
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <span>© Matija Alilović 2022</span>
        <Links>
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
        </Links>
      </Wrapper>
    </Container>
  );
}

export default Footer;
