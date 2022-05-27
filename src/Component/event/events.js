import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:4000";
export const Events = (props) => {
  const [event, setEvent] = useState([]);
  const [filter, filterEvent] = useState([]);
  const [address, selectedAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getevent();
  }, []);

  const getevent = async () => {
    await axios.get(`${baseUrl}/events`).then((response) => {
      setEvent(response.data);
      filterEvent(response.data);
    });
  };
  const updateevent = (id) => {
    useEffect =
      (() => {
        getevent();
      },
      []);
    axios
      .put(`${baseUrl}/events/${id}`, { id: "01", address: "Mohali" })
      .then((response) => {
        console.log(response);
        getevent();
      });
  };
  const deleteevent = async (id) => {
    await axios.delete(`${baseUrl}/events/${id}`).then(() => {
      getevent();
    });
  };
  console.log(event, "event");

  const onChange = (e) => {
    console.log(e.target.value);

    if (e.target.value) {
      selectedAddress(e.target.value);

      let filterEventData = event.filter((item) => {
        const searchVal = e.target.value.toLowerCase();
        const add = item.address.toLowerCase();
        return add.includes(searchVal);
      });
      console.log(filterEventData);
      filterEvent(filterEventData);
    } else {
      getevent();
      selectedAddress("");
    }
  };

  return (
    <div>
      Events data
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={onChange}
      />
      <select value={address} onChange={onChange}>
        <option value="">Select City</option>
        <option value="Mohali">Mohali</option>
        <option value="Chd">Chd</option>
        <option value="Delhi">Delhi</option>
        <option value="Odisha">Odisha</option>
        <option value="U.P">U.P</option>
      </select>
      <table>
        <tr>
          <th>Id</th>
          <th>address</th>
          <th>
            {" "}
            <button onClick={() => navigate("/add-event")}>AddEvent</button>
          </th>
        </tr>
        {filter &&
          filter.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <br />
              <td>{item.address}</td>

              <button>
                <Link to={`/edit-event/${item.id}`}>Edit</Link>
              </button>

              <button onClick={() => deleteevent(item.id)}>Delete</button>
            </tr>
          ))}
      </table>
    </div>
  );
};
export default Events;
