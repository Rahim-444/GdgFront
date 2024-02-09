import React from 'react'
import logo from "../assets/Logo.svg";
const Nav = () => {
  return (
    <div className=" flex justify-between px-16 py-8 items-center">
        <img src={logo} alt="" className="w-50" />
        <button className="bg-blue-900 py-2 px-8 h-12 rounded-tl-xl rounded-br-xl text-white">
              New Metting
        </button>
    </div>
  )
}

export default Nav