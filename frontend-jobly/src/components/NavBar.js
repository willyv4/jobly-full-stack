import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrUserContext from "./Authentication/CurrUserContext";

function NavBar() {
  const appContext = useContext(CurrUserContext);

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
    <div className="fixed top-0 z-10 flex w-full flex-wrap items-center justify-between bg-neutral-900 p-4 shadow-lg">
      <NavLink
        to="/"
        className="-mb-4 -ml-4 -mt-5 bg-teal-400 p-5 text-3xl font-bold text-neutral-800 hover:animate-pulse hover:bg-teal-300"
      >
        Jobly
      </NavLink>

      <div>
        {appContext.authed &&
          navLinks.map((link, index) => (
            <NavLink
              to={link.to}
              key={index}
              className="ml-1 rounded-full bg-neutral-100 p-2 px-2 text-[10px] font-medium text-neutral-800 hover:animate-pulse hover:bg-neutral-400  
			sm:px-4 sm:text-sm"
            >
              {link.text}
            </NavLink>
          ))}
        {!appContext.authed ? (
          <>
            <NavLink
              to="/login"
              className="ml-1 rounded-full bg-neutral-100 p-2 px-2 text-[10px] font-medium text-neutral-800 hover:animate-pulse hover:bg-neutral-400 
			sm:px-4 sm:text-sm"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="ml-1 rounded-full bg-neutral-100 p-2 px-2 text-[10px] font-medium text-neutral-800 hover:animate-pulse hover:bg-neutral-400 
			sm:px-4 sm:text-sm"
            >
              Sign up
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/logout"
            className="ml-1 rounded-full bg-slate-100 p-2 px-2 text-[10px] font-medium text-neutral-800 hover:animate-pulse hover:bg-neutral-400 
			sm:px-4 sm:text-sm"
          >
            logout
            <small className="absolute right-2 top-2 rounded-full bg-teal-500 px-2 text-[8px] text-black">
              {appContext.username}
            </small>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
