import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      Nav
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
};

export default Nav;
