import React from 'react'
import { Navbar } from './Navbar'
import "../styles/header.css";

export const Header = () => {
  return (
    <>
    <div className="img">
   <img src="./images/E-park.png" alt="logo" />
   </div>
    <Navbar/>
    </>

  );
}
