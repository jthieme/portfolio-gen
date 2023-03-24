import React from "react";

const SpacingInput = ({ labelText, name, nameMargin, handleMargin }) => {
  return (
    <>
      <div
        class="form-group"
        style={{ marginLeft: "2%", width: "20%", display: "inline-flex" }}
      >
        <label class="form-group-label label--xs text-gray-700">
          {labelText}
        </label>
        <input
          type="text"
          class="form-group-input input--xs"
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
