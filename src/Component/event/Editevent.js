import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const baseUrl = "http://localhost:4000";

const Editevent = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState("");

  useEffect(() => {
    getSingleevent();
  }, []);

  const onChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.taget.value });
  };

  const getSingleevent = async () => {
    await axios.get(`${baseUrl}/events/${id}`).then((response) => {
      console.log(response);
      setEvent(response.data);
    });
  };

  const submitButton = (e) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/events/${id}`, { ...event })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      Editevent
      <form onSubmit={submitButton}>
        <input
          type="num"
          name="id"
          placeholder="Give id"
          value={event.id}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="address"
          value={event.address}
          placeholder="address"
          onChange={onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Editevent;
