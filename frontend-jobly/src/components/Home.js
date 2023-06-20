import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrUserContext from "./Authentication/CurrUserContext";
import BgImage from "./BgImage";

const Home = () => {
  const appContext = useContext(CurrUserContext);

  return (
    <div className="flex h-screen items-center justify-center">
      <BgImage />
      <div className="p-4 shadow-black">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-neutral-200">
          Embark on Your Journey to Success with Jobly
        </h1>
        <p className="mb-6 text-xl font-bold text-white">
          Where Careers Take Flight!
        </p>

        {!appContext.authed ? (
          <>
            <NavLink
              to="/login"
              type="submit"
              className="text-neutrall-900 mr-4 rounded-full bg-neutral-50 px-4 py-2 text-xl font-bold hover:bg-neutral-300 "
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              type="submit"
              className="rounded-full bg-neutral-50 px-4 py-2 text-xl font-bold text-neutral-900 hover:bg-neutral-300"
            >
              Create Account
            </NavLink>
          </>
        ) : (
          <div className="w-fit rounded-full bg-teal-200 px-4 py-2 text-xl font-bold text-neutral-900">
            Welcome, {appContext.username}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
