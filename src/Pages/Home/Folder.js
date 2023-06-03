import React, { useState } from 'react';
import styled from 'styled-components';

const BookWrapper = styled.div`
  position: relative;
  width: 256px; /* 80% of the original width */
  height: 362.4px; /* 80% of the original height */
  margin: 0 auto;
  margin-top: 4rem; /* 80% of the original margin-top */
  perspective: 1000px;

  &:hover .cover {
    transform: rotateY(-80deg);
  }

  &:hover .gloss {
    transform: rotateY(-80deg) translateX(80%) scaleX(4);
  }

  &:hover .description {
    transform: translateX(16%);
  }
`;

const Gloss = styled.div`
  position: absolute;
  top: 0;
  z-index: 200;
  overflow: hidden;
  width: 20%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  transition: all 0.5s;
  transform: translateX(0%) rotateY(0deg);
  transform-origin: left center;
`;

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #e7c9a9;
  transition: transform 0.5s;
  transform: translateX(0);
  transform-origin: left center;
  backface-visibility: hidden;
`;

const Tab = styled.div`
  position: absolute;
  bottom: 0;
  right: -16px; /* 80% of the original right position */
  width: 16px; /* 80% of the original width */
  height: 48px; /* 80% of the original height */
  background-color: #d7b999;
  border-radius: 0 4px 4px 0;
`;

const Description = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: inherit;
  height: inherit;
  border: solid 1px grey;
  background: white;
  transition: all 1s;
  padding: 10% 10%;
  padding-top: 6%;
  z-index: 1;

`;

const Heading = styled.h1`
  font-family: 'Pontano Sans', sans-serif;
  font-size: calc(0.75em + 0.1vw);
  text-align: center;
  line-height: 1.25em;
`;

const Folder = ({ userData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <BookWrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Gloss className={isHovered ? 'gloss' : ''} />
      <Cover className={isHovered ? 'cover' : ''} />
      <Description className={isHovered ? 'description' : ''}>
        <Heading>{userData.name}'s Portfolio</Heading>
        <div style={{textAlign: "center", marginTop: "25%"}}>

        <button><a href={`/${userData.login}`}>Select Repos</a></button>
          <button><a href={""}>Edit Portfolio</a></button>
          <button><a href={""}>View Portfolio</a></button>
        </div>
      </Description>
      <Tab />
    </BookWrapper>
  );
};

export default Folder;
