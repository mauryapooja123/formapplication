import React from "react";

const UpdateForm = (props) => {
  return (
    <div>
      {props.label}
      <form onSubmit={props.submitButton}>
        <input
          type="num"
          name="id"
          placeholder="Id"
          onChange={props.onChange}
          value={props.value.id}
        />
        <br />
        <input
          type="text"
          name="state"
          placeholder="state"
          onChange={props.onChange}
          value={props.value.state}
        />
        <br />
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={props.onChange}
          value={props.value.country}
        />
        <br />
        <button type="submit">{props.buttonTitle}</button>
      </form>
    </div>
  );
};
export default UpdateForm;
