import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinks = [
    {
      to: "/companies",
      text: "Companies",
    },
    {
      to: "/jobs",
      text: "Jobs",
    },
    {
      to: "/profile",
      text: "Profile",
    },
  ];

  return (
    <div className="fixed z-10 top-0 w-full flex flex-wrap items-center justify-between p-4 bg-zinc-100 shadow-lg">
      <NavLink
        to="/"
        className="text-2xl font-bold bg-orange-200 p-5 -ml-4 -mt-4 -mb-4 text-sky-950"
      >
        Jobly
      </NavLink>

      <div>
        {navLinks.map((link, index) => (
          <NavLink
            to={link.to}
            key={index}
            className="ml-2 text-xs sm:text-sm font-medium text-zinc-200 hover:text-zinc-300 bg-sky-950 p-2 px-2  
			sm:px-4 rounded-full"
          >
            {link.text}
          </NavLink>
        ))}
        <NavLink
          to="/login"
          className="ml-2 text-xs sm:text-sm font-medium text-zinc-200 hover:text-zinc-300 bg-sky-950 p-2 px-2  
			sm:px-4 rounded-full"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
