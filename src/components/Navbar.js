import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/nav.css";
export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="./Home"><button >Home</button></a>
        <a href="./Contact"><button >Contact</button></a>
        <a href="./Login"><button >Login</button></a>
        <a href="*"><button >About Us</button></a>
        
        

        {/* <ul>
          <li>
            <a href="./Home"> Home</a>{" "}
          </li>
          <li>
            <a href="./Login"> Login</a>{" "}
          </li>
          <li>
            <a href="./Contact"> Contact</a>{" "}
          </li>
          <li>
            <a href="#"> About Us</a>{" "}
          </li>
        </ul> */}
      </div>
    </>
  );
};
