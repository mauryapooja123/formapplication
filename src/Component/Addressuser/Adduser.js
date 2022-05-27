import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./form";
import Updateuser from "./updateuser";

const Url = "http://localhost:3004";
const Adduser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleUser(id);
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getSingleUser = async () => {
    await axios.get(`${Url}/Address/${id}`).then((response) => {
      console.log(response);
      setUser(response.data);
    });
  };

  const submitButton = (e) => {
    e.preventDefault();
    axios.post(`${Url}/Address`, user).then((response) => {
      console.log(response);
      navigate("/user");
    });
  };

  return (
    <div>
      <Form
        label="Add Form"
        submitButton={submitButton}
        onChange={onChange}
        value={user}
        buttonTittle="Add"
      />
    </div>
  );
};

export default Adduser;
