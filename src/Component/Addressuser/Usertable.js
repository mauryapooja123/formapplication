import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({ country, updateuser, deleteuser }) => {
  const navigate = useNavigate();

  return (
    <>
      {country &&
        country.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.state}</td>
              <td>{item.country}</td>

              <button onClick={() => navigate(`/update-user/${item.id}`)}>
                Update
              </button>
              <button onClick={() => deleteuser(item.id)}>Delete</button>
            </tr>
          );
        })}
    </>
  );
};
export default Table;
