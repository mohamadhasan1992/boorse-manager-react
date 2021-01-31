import React from "react";

const CheckboxComponent = (props) => {
  const {
    difficultyName,
    difficultyStatus,
    difficultyValue
  } = props.difficulty;
  return (
    <div>
        <input
            type="checkbox"
            name="difficulty"
            value={difficultyValue}
            onClick={props.selectedCheckbox}
            checked={difficultyStatus}
        ></input>
        <label htmlFor={difficultyValue}>{difficultyName}</label>
    </div>
  );
};

export default CheckboxComponent;


