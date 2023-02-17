import React, { useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const RepoCard = ({ repoData, key, handleCheckboxChange, hasCheckBox, hasBorder }) => {
  const { name, language, html_url } = repoData;

  const handleRepoSelection = (event) => {
    handleCheckboxChange(repoData);
  };

  return (
    <>
      <div style={{ paddingBottom: 15 }}>
        <div
          className="grid-c-1 u-duration-300"
          key={key}
          style={{
            
            border: hasBorder ? "1px solid black" : "",
            marginBottom: 5,
            marginLeft: 20,
            borderRadius: 10,
          }}
        >
          <details className="accordion form-ext-checkbox grid-c-1">
            <summary
              className="accordion__summary form-ext-label grid-c-1"
              htmlFor="check-dark"
            >
              {hasCheckBox && (
                <span>
                  <input
                    id="check-dark"
                    className="form-ext-input form-ext-input--dark"
                    type="checkbox"
                    onChange={handleRepoSelection}
                  />
                </span>
              )}
              Repo Name: {name}
            </summary>
            <p style={{ paddingLeft: "6em" }}>
              Repo language:
              <span style={{ fontWeight: "bolder" }}> {language}</span>
            </p>
            <p style={{ paddingLeft: "6em" }}>
              Repo Link:
              <span style={{ fontWeight: "bolder" }}>
                <a href={html_url} target="_blank">
                  {html_url}
                </a>
              </span>
            </p>
          </details>
        </div>
      </div>
    </>
  );
};

export default RepoCard;
