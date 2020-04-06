import React from 'react';
import GlobalStyle from './theme/GlobalStyle.js';
import { Wrapper, H1, Content } from './components/index';

const Root = () => {
  return (
    <Wrapper>
      <H1>Picture of the day by NASA</H1>
      <Content />
      <GlobalStyle />
    </Wrapper>
  );
};

export default Root;
