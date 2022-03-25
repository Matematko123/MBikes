import React from 'react';
import styled from 'styled-components';

import SecondaryButton from 'reusable/SecondaryButton';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
`;

const Wrapper = styled.div`
  width: 55rem;
  padding: 2rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  border-radius: 1rem;
  @media (max-width: 768px) {
    width: 65%;
  }
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Link = styled.a`
  margin-top: 0.5rem;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
`;

export default function RegisterPage() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" required />
          <Input placeholder="last name" required />
          <Input placeholder="username" required />
          <Input placeholder="email" required />
          <Input placeholder="password" required />
          <Input placeholder="confirm password" required />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data according to <Link>PRIVACY POLICY</Link>
          </Agreement>
          <SecondaryButton>CREATE</SecondaryButton>
        </Form>
      </Wrapper>
    </Container>
  );
}
