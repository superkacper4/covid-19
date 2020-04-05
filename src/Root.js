import React from 'react';
import GlobalStyle from './theme/GlobalStyle.js';
import { Wrapper, H1, Content } from './components/index';

const Root = () => {
  return (
    <Wrapper>
      <H1>Covid-19 on the world</H1>
      <Content poland />
      <Content />

      <GlobalStyle />
    </Wrapper>
  );
};

export default Root;
