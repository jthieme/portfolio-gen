import React from "react";

const SpacingInput = ({ labelText, name, nameMargin, handleMargin }) => {
  return (
    <>
      <div
        className="form-group"
        style={{ marginLeft: "2%", width: "20%", display: "inline-flex" }}
      >
        <label class="form-group-label label--xs text-gray-700">
          {labelText}
        </label>
        <input
          type="text"
          className="form-group-input input--xs"
          placeholder="Width"
          name={name}
          value={nameMargin}
          onChange={handleMargin}
        />
      </div>
    </>
  );
};

export default SpacingInput;
