import React from 'react';
import ProfilePicture from '../ProfilePicture';
import styled from 'styled-components';
import media from '../../styles/media';

const LogoContainer = styled.div`
display:block;
width: 180px;
margin: -20px auto;
height: 335px;
//display: block;

}


`;
const SVG = styled.svg`
    fill: none;
    stroke: #c5ff00;
    stroke-miterlimit: 10;
    stroke-width: 7px;
    z-index: 9;
}

> polyline{
stroke-dashoffset: 0; stroke-dasharray: none;}
`;


const Email = styled.h1`

    top: auto;
    left: auto;
    bottom: 50%;
    right: 50%;
    text-align: center;
    transform: translate(45%, 145%) rotate(-90deg);
    transform-origin: center;
    transition: all .07s ease;
    visibility: visible;
    letter-spacing: 1rem;
    &&:hover{

      width: 100%;
      letter-spacing: 1.2em;
    }



`;

const Linkedin = styled.h1`

font-size: 1.5rem;
transition: all .07s ease;
text-align: center;
color: black;
text-decoration: none;
transform-origin: center;
letter-spacing: 1rem;
display: block;
top: 0;
cursor: pointer;
z-index: 100;
&&:hover{

  width: 100%;
  letter-spacing: 1.5em;

}
`;
const Instagram = styled.h1`

    top: auto;
    right: auto;
    bottom: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-45%, 160%) rotate(90deg);
    transform-origin: center;
    transition: all .07s ease;
    visibility: visible;
    letter-spacing: 0.8rem;
    &&:hover{

      width: 100%;
      letter-spacing: 0.7em;
    }



`;

const StyledImage= styled(ProfilePicture)`

  //padding: 5px;
  background: rgba(0,0,0,0.2);
  //opacity: 0.5;
`;



const GlobalHeader=(...props)=>{
 return(
   <div>


 {/*<StyledImage />*/}

   <Linkedin>
     {'LinkedIn'}
   </Linkedin>

{/*
   <Anchor href="https://www.instagram.com/houdette/">
     {'Instagram'}
   </Anchor>
*/}

<Email>
  {'Email'}
</Email>
<Instagram>
  {'Instagram'}
</Instagram>
<LogoContainer>
<StyledImage/>
<SVG  xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 187.61 291.01'}>
 <polyline points={'58.29 2.34 5.4 61.22 181.08 169.72 5.08 284.54 5.08 170.54'}></polyline></SVG>


</LogoContainer>
</div>

 );



}

export default GlobalHeader;
