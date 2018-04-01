import React from 'react';
import ProfilePicture from '../ProfilePicture';
import styled from 'styled-components';

const Container= styled.div`

  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;


`;


const Heading = styled.h1`
  flex: 1;
  border: .4rem;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.2);
  text-shadow: 0 0 .5rem black;


`;

const Anchor = styled.a`
flex: 1;
border: .4rem;
border-radius: .5rem;
margin: 1rem;
font-size: 1.5rem;
padding: 1rem .5rem;
transition: all .07s ease;
text-align: center;
color: white;
background: rgba(0,0,0,0.2);
text-shadow: 0 0 .5rem black;
text-decoration: none;
`;


const StyledImage= styled(ProfilePicture)`
  height: 100px;
  border: 5px ;
  padding: 5px;
  background: rgba(0,0,0,0.2);
  border-radius: .5rem;
  flex-wrap: wrap;
`;



const GlobalHeader=(linkedin, ...props)=>{
 return(
   <div>
   <Heading>
     {'React-Portfolio: under Construction'}
   </Heading>
   <Container {...props}>
   <StyledImage />

   <Anchor href='https://www.linkedin.com/in/houda-benqassem-m-s-577a19a2/'>
     {'LinkedIn'}
   </Anchor>

   <Heading>
     {'Slack'}
   </Heading>
   <Anchor href="https://www.instagram.com/houdette/">
     {'Instagram'}
   </Anchor>

</Container>
</div>

 );



}

export default GlobalHeader;
