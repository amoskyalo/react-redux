import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Nav = () => {
  return (
    <nav className="bg-navColor sticky top-0   mb-5 px-10">
      <div className="max-w-5xl mx-auto flex flex-row justify-between items-center">
      <Link to="/">
        <img src={logo} alt="" className="h-16" />
      </Link>
      <h2 className="text-white text-xl font-bold md:text-3xl">
        Welcome to my app
      </h2>
      </div>
    </nav>
  );
};

export default Nav;
