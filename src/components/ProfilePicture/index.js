import React from 'react';
import cutepic from './houda.jpg';
import styled from 'styled-components';

const Image = styled.img`
  height: 200px;
  margin: 20px;

`;
const ProfilePicture = () => (
  <Image src={cutepic} />
);


export default ProfilePicture;
