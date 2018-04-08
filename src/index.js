import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

injectGlobal`
body{
  margin: 0;
  padding:0;
  font-family: 'Roboto', sans-serif;
}
html{

  background: url(https://s3.amazonaws.com/devhouda/images/v2.gif);
  background-size: cover;
}
`;


ReactDOM.render(<App />, document.getElementById('root'));
