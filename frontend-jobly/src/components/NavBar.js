import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrUserContext from "./Authentication/CurrUserContext";

function NavBar() {
  const CURR_USER = useContext(CurrUserContext);

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
        {CURR_USER &&
          navLinks.map((link, index) => (
            <NavLink
              to={link.to}
              key={index}
              className="ml-1 text-xs sm:text-sm font-medium text-zinc-200 hover:text-zinc-300 bg-sky-950 p-2 px-2  
			sm:px-4 rounded-full"
            >
              {link.text}
            </NavLink>
          ))}
        {!CURR_USER ? (
          <>
            <NavLink
              to="/login"
              className="ml-1 text-xs sm:text-sm font-medium text-zinc-200 hover:text-zinc-300 bg-sky-950 p-2 px-2  
			sm:px-4 rounded-full"
            >
              Login
            </NavLink>
            <NavLink
              to="/create-account"
              className="ml-1 text-xs sm:text-sm font-medium text-zinc-200 hover:text-zinc-300 bg-sky-950 p-2 px-2  
			sm:px-4 rounded-full"
            >
              Create Account
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/logout"
            className="ml-1 text-xs sm:text-sm font-medium text-zinc-200 hover:text-zinc-300 bg-sky-950 p-2 px-2  
			sm:px-4 rounded-full"
          >
            logout
            <small className="absolute bg-orange-200 px-2 right-2 rounded-full top-2 text-[9px] text-sky-950">
              {CURR_USER.user}
            </small>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
