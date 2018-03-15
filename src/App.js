import React, { Component } from 'react';
import ProfilePicture from './components/ProfilePicture';
import styled from 'styled-components';

const Heading = styled.h1`
  color: lightblue;
  margin: 20px;

`;


class App extends Component {
  render() {
    return (
      <div>
       <Heading>{'Portfolio'} </Heading>
        <Heading>{'Under Construction'} </Heading>


        <ProfilePicture/>

      </div>
    );
  }
}

export default App;
