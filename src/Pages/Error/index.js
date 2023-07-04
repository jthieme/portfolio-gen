import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
    justify-content: center;
    align-items: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const ErrorPage = () => {
    return (
        <ErrorWrapper>
            <h1>404 Error</h1>
            <p>
                You are not authorized to view this page.
                Please go to a page you are authorized to view.
            </p>
        </ErrorWrapper>
    );
};

export default ErrorPage;