import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex text-white justify-between md:gap-x-[10%] lg:gap-x-[20%]  items-center h-24 mx-auto">
      <h1 className=" w-full text-3xl font-bold text-[#140044]  ">
        ABC Theatre
      </h1>

      <ul className=" hidden md:flex ">
        <li className=" p-4 ">Home</li>
        <li className=" p-4">About</li>
        <li className=" p-4">Gallery</li>
        <li className=" p-4">Teacher</li>
        <li className=" p-4">Product</li>
        <li className=" p-4">Event</li>
        <li className=" p-4">Login</li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
        {!nav ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} className="  ml-10" />
        )}
      </div>

      <div
        className={
          !nav
            ? "fixed  left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#85C3CB] ease-in-out duration-500 gap-50"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-[#140044] m-4 ">
          ABC Theatre
        </h1>
        <ul className="p-4 uppercase ">
          <li className=" p-4 border-b border-gray-600 ">Home</li>
          <li className=" p-4 border-b border-gray-600 ">About</li>
          <li className=" p-4 border-b border-gray-600 ">Gallery</li>
          <li className=" p-4 border-b border-gray-600 ">Teacher</li>
          <li className=" p-4 border-b border-gray-600 ">Product</li>
          <li className=" p-4 border-b border-gray-600 ">Event</li>
          <li className=" p-4">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
