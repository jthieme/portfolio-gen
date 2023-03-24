import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faChevronUp,
  } from "@fortawesome/free-solid-svg-icons";

const DropDownOptions = ({showFunction, showOption, hLabel}) => {
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={showFunction}
      >
        <h5 style={{ textAlign: "center" }}>
          {showOption ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: "4%" }} />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginRight: "4%" }}
            />
          )}
          {hLabel}
        </h5>
      </div>
      <div className="divider" style={{ marginTop: "-2%" }} />
    </>
  );
};

export default DropDownOptions;
