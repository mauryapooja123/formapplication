import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:4000";
const User = () => {
  let navigate = useNavigate();

  const [post, setPost] = useState("");
  console.log(post);
  const { id } = useParams();

  useEffect(() => {}, []);

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/posts`, {
        id: post.id,
        name: post.name,
        adderss: post.adderss,
      })
      .then((response) => {
        console.log("===>>>", response);
        alert("Add Successful");
        navigate("/");
      });
  };

  return (
    <div>
      <form onSubmit={submitButton}>
        <input
          type="num"
          name="id"
          placeholder="Id"
          value={post.id}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={post.name}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="adderss"
          placeholder="Address"
          value={post.adderss}
          onChange={onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default User;
