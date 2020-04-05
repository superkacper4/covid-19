import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  height: 35%;
  width: 100%;
  background-color: ${({ poland }) => (poland ? '#b04a4a' : '#996d6d')};
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = ({ poland }) => {
  return (
    <StyledContent poland={poland}>
      {poland ? 'liczba zachorowań w PL: 10000' : 'liczba na świecie: 1000000'}
    </StyledContent>
  );
};

export default Content;
