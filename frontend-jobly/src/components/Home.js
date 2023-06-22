import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CurrUserContext from "./Authentication/CurrUserContext";
import BgImage from "./BgImage";
import { useGuestLogin } from "../hooks/useAuth/useLogin";
import { useLogin } from "../hooks/useAuth/useLogin";

const Home = ({ setAuthorized }) => {
  const appContext = useContext(CurrUserContext);
  const [calledLogin, setCalledLogin] = useState(false);
  const [loginData, setLoginData, handleLoginSubmit] =
    useGuestLogin(setCalledLogin);
  const [message] = useLogin(
    loginData,
    setLoginData,
    setAuthorized,
    calledLogin,
    setCalledLogin
  );

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
          <div className="flex flex-col">
            <div className="mb-4 flex">
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
            </div>
            <form onSubmit={handleLoginSubmit} className="ml-2">
              <button
                type="submit"
                className="text-lg font-bold text-teal-300 underline hover:animate-pulse"
              >
                {calledLogin ? "one moment please..." : "or continue as guest"}
              </button>
            </form>
          </div>
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
