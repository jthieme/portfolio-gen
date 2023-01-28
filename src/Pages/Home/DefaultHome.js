import React from "react";
import styled from "styled-components";

const largeDiv = styled.div`
  display: "flex",
  justifyContent: "center",
  alignItems: "Right",
  height: "100vh",
`;

const DefaultHome = () => {
  return (
    <largeDiv>
      <h1>Sanity Check for Default Home</h1>
    </largeDiv>
  );
};

export default DefaultHome;
