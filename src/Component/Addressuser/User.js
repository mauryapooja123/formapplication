import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Usertable from "./Usertable";

const Url = "http://localhost:3004";
const User = () => {
  const [user, setUser] = useState();
  const [filter, filterCountry] = useState();
  const [country, selectedCountry] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    await axios.get(`${Url}/Address`, {}).then((response) => {
      console.log(response);
      setUser(response.data);
      filterCountry(response.data);
      selectedCountry(response.data);
      // selectedCountry(filteredData);
    });
  };

  const updateuser = (id) => {
    axios.put(`${Url}/Address/${id}`).then((response) => {
      console.log(response);
      getuser();
    });
  };

  const deleteuser = (id) => {
    axios.delete(`${Url}/Address/${id}`).then(() => {
      getuser();
    });
  };

  const onChange = (e) => {
    console.log(e.target.value);

    if (e.target.value) {
      selectedCountry(e.target.value);

      let filteredData = user.filter((item) => {
        const searchValue = e.target.value.toLowerCase();
        const add = item.country.toLowerCase();
        return add.includes(searchValue);
      });
      console.log(filteredData);
      selectedCountry(filteredData);
    } else {
      getuser();
      selectedCountry();
    }
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={onChange}
      />
      <label for="value">Choose a country : </label>
      <select onChange={onChange}>
        <option value=" ">Countries</option>
        <option value="india">india</option>
        <option value="egypt">Egypt</option>
        <option value="U.K.">U.K.</option>
      </select>
      <table>
        <tr>
          <th>id</th>
          <th>state</th>
          <th>country</th>
          <th>
            <button onClick={() => navigate("/add-user")}>Add</button>
          </th>
        </tr>

        <tbody>
          <Usertable
            country={country}
            updateuser={updateuser}
            deleteuser={deleteuser}
          />{" "}
        </tbody>
      </table>
    </div>
  );
};
export default User;
