import officeImage from "../assets/office.png";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrUserContext from "./Authentication/CurrUserContext";

const Home = () => {
  const CURR_USER = useContext(CurrUserContext);
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        src={officeImage}
        alt="office"
        className="absolute w-full h-full object-cover -z-20 opacity-50"
      />
      <div className="absolute top-0 w-full h-[430px] object-cover -z-10 bg-gradient-to-b from-transparent to-white"></div>
      <div className="absolute top-[430px] w-full h-[410px] object-cover -z-10 bg-gradient-to-t from-transparent to-white"></div>
      <div className=" p-4 shadow-white">
        <h1 className="text-4xl text-sky-950 font-bold mb-4">
          Embark on Your Journey to Success with Jobly
        </h1>
        <p className="text-xl text-sky-900 mb-6">Where Careers Take Flight!</p>
        {!CURR_USER ? (
          <>
            <NavLink
              to="/login"
              type="submit"
              className="mr-4 px-4 py-2 bg-orange-200 border-2 border-sky-950 text-xl rounded-full text-sky-950 font-bold hover:bg-orange-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/create-account"
              type="submit"
              className="px-4 py-2 bg-orange-200 border-2 border-sky-950 text-xl rounded-full text-sky-950 font-bold hover:bg-orange-300"
            >
              Create Account
            </NavLink>
          </>
        ) : (
          <div>welcome: {CURR_USER.user} </div>
        )}
      </div>
    </div>
  );
};

export default Home;
