import React, { useState } from "react";

function Page(props) {
  const [name, setName] = useState({ name: "", email: "", password: "" });
  const inputHandler = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });

    console.log(name);
  };

  const submitButton = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={submitButton}>
        Enter your name
        <input
          type="text"
          onChange={inputHandler}
          name="name"
          value={props.name}
          placeholder="Name"
        />
        <br />
        Enter email
        <input
          type="email"
          onChange={inputHandler}
          name="email"
          value={props.email}
          placeholder="Mail"
        />
        <br />
        Enter password
        <input
          type="password"
          onChange={inputHandler}
          name="password"
          value={props.password}
          placeholder="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Page;
