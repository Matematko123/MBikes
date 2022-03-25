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
  width: 25%;
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

const Link = styled.a`
  margin-top: 0.5rem;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
`;

export default function LoginPage() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" required />
          <Input placeholder="password" required />
          <SecondaryButton>LOGIN</SecondaryButton>
          <Link>Forgot password?</Link>
          <Link>Don't have account?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
