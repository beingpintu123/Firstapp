import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex place-content-around m-4">
      <h1 className="text-4xl font-bold">Pintu kumar</h1>
      <ul className="flex gap-5">
        <li className="flex flex-col items-center text-2xl font-semibold ">
          <Link to="/Signup" className="">Signup</Link>
          <hr className="h-[0.2vh] w-15  bg-red-500 " />
        </li>
        <li className="flex flex-col items-center text-2xl font-semibold">
          <Link to="/Login">Login</Link>
          <hr className="h-[0.2vh] w-14 bg-red-500" />
        </li>
        <li className="flex flex-col items-center text-2xl font-semibold">
          <Link to="/About">About</Link>
          <hr className="h-[1.5px] w-14  bg-red-500" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
