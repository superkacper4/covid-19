import React from 'react';
import GlobalStyle from './theme/GlobalStyle.js';
import { Wrapper , H1 } from './components/index';


const Root = () => {
  return (
    <Wrapper>
      <H1>Covid-19 on the world</H1>
      <GlobalStyle />
    </Wrapper>
  );
};

export default Root;
