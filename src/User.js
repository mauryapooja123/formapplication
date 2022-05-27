import React, { useEffect } from "react";

import data from "./db.json";

const User = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      Personal Data
      <table>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Hometown</th>
        </tr>

        {data.map((a, index) => {
          return (
            <tr key={index}>
              <td>{a.name}</td>
              <td>{a.contact}</td>
              <td>{a.state}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default User;
