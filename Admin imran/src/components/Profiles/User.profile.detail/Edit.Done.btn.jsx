import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";

function EditDoneBtn(props) {
  const { disabled, setDisabled } = props;

  const handleClick = () => {
    setDisabled((prevValue) => !prevValue);
  };

  return (
    <>
      <button
        className="btn btn-dark"
        disabled={!disabled}
        onClick={handleClick}
      >
        Edit <EditIcon fontSize="small" />
      </button>
      <button
        className="btn btn-success"
        disabled={disabled}
        onClick={handleClick}
      >
        Done <DoneRoundedIcon fontSize="small" />
      </button>
    </>
  );
}

export default EditDoneBtn;
