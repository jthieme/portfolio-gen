import React from "react";
import styled from "styled-components";
import globe from '../../assets/globe.jpg';

const largeDiv = styled.div`
  display: "flex",
  justifyContent: "center",
  alignItems: "Right",
  height: "20vh",
`;

const DefaultHome = () => {
  return (
    // <largeDiv>
      <div style={{marginTop: "-1.3%", height: "442px"}}>
        <img src={globe} style={{width: "268.5%", height: "inherit"}}/>
      </div>
    // </largeDiv>
  );
};

export default DefaultHome;
