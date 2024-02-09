import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className=" flex justify-between px-16 py-8 items-center">
      <Link to="/">
        <img src={logo} alt="" className="w-50" />
      </Link>
      <Link to="/Meeting">
        <button className="bg-blue-900 py-2 px-8 h-12 rounded-tl-xl rounded-br-xl text-white">
          New Metting
        </button>
      </Link>
    </div>
  );
};

export default Nav;
