import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 330px;
  width: 200px;
  margin: 80px 80px 60px;
  transform: translate(-50%, -50%);


`;
const ProfilePicture = ({className}) => (

  <Image className={className} src='https://s3.amazonaws.com/devhouda/images/houdarev2.gif' />
);


export default ProfilePicture;
