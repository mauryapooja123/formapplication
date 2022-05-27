import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:4000";
const User = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect((id) => {
    updatePost(id);
  });

  const getPosts = async () => {
    await axios.get(`${baseUrl}/posts`).then((response) => {
      console.log(response);
      setPost(response.data);
    });
  };
  const updatePost = (id) => {
    axios
      .put(`${baseUrl}/posts/${id}`, { name: "SaiJyoti", adderss: "Odisha" })
      .then((response) => {
        console.log("===>>>", response);
        getPosts();
      });
  };

  const deletePost = async (id) => {
    return axios.delete(`${baseUrl}/posts/${id}`).then(() => {
      getPosts();
    });
  };

  return (
    <div>
      Personal Data
      <table>
        <tr>
          <th>Id's</th>
          <th>Name</th>
          <th>Address</th>
          <th>
            {" "}
            <Link to={`/add-user`}>Add user</Link>
          </th>
        </tr>

        {post &&
          post.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.adderss}</td>
              <button>
                <Link to={`edit-user/${item.id}`}>Update</Link>
              </button>
              <button onClick={() => deletePost(item.id)}>Delete</button>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default User;
