/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './assets/components/Home';
import { createGlobalStyle } from 'styled-components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Home/>
      </div>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Volkhov", serif;
  }
`;