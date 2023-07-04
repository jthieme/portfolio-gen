import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
`;

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <FontAwesomeIcon icon={faSpinner} size="2xl" spin />
        </SpinnerWrapper>
    );
};

export default Spinner;