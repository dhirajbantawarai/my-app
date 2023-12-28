import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/nav.css";
export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Logout</li>
          <li>Login</li>
        </ul>
      </div>
    </>
  );
};
