import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
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

function BikeSelector({ img, battery, charging, speed, weight }) {
  return (
    <Container>
      <img src={img} alt="" />
      <Text>
        <TextBlock>
          <h4>Battery range</h4>
          <span>{battery}</span>
        </TextBlock>
        <TextBlock>
          <h4>Charging time</h4>
          <span>{charging}</span>
        </TextBlock>
        <TextBlock>
          <h4>Assist speed</h4>
          <span>{speed} kmph</span>
        </TextBlock>
        <TextBlock>
          <h4>Weight</h4>
          <span>{weight} kg</span>
        </TextBlock>
      </Text>
    </Container>
  );
}

export default BikeSelector;
