import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:4000";
const Event = () => {
  let navigate = useNavigate();
  const [event, setEvent] = useState({});
  console.log(event);
  const { id } = useParams();

  useEffect(() => {
    getSingleEvent();
  }, []);

  const onChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const getSingleEvent = async () => {
    await axios.get(`${baseUrl}/events/${id}`).then((response) => {
      console.log(response);
      setEvent(response.data);
    });
  };
  const submitButton = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}/events`, event).then((response) => {
      console.log(response);
      navigate("/events");
    });
  };
  return (
    <div>
      <form onSubmit={submitButton}>
        <input
          type="num"
          name="id"
          placeholder="Id"
          onChange={onChange}
          value={event.id}
        />
        <br />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={onChange}
          value={event.address}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Event;
