import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpdateForm from "./update";

const Url = "http://localhost:3004";

const Updateuser = () => {
  const { id } = useParams();
  const [updateUser, setUpdateUser] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    await axios.get(`http://localhost:3004/Address/${id}`).then((response) => {
      console.log(response);
      setUpdateUser(response.data);
    });
  };
  const submitButton = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3004/Address/${id}`, updateUser)
      .then((response) => {
        setUpdateUser(response.data);
        navigate("/user");
      });
  };
  return (
    <>
      <UpdateForm
        submitButton={submitButton}
        onChange={handleChange}
        buttonTitle="Update"
        label="Update User"
        value={updateUser}
      />
    </>
  );
};
export default Updateuser;
