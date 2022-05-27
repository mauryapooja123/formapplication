import React, { useState } from "react";
import EditUser from "./editUser";
function Submit() {
  const [inputField, setInputField] = useState({});

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault();
    console.log(inputField);
  };

  return (
    <div>
      <EditUser
        submitButton={submitButton}
        inputsHandler={inputsHandler}
        inputField={inputField}
      />
    </div>
  );
}

export default Submit;
