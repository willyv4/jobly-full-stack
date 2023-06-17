import React from "react";
import officeImage from "../../assets/office.png";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import CurrUserContext from "./CurrUserContext";

const RegisterForm = ({
  regInputs,
  regData,
  handleRegChange,
  handleRegSubmit,
}) => {
  const navigate = useNavigate();
  const CURR_USER = useContext(CurrUserContext);

  useEffect(() => {
    if (CURR_USER) {
      navigate("/");
    }
  }, [CURR_USER, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-lg  border-2 border-sky-800">
        <form onSubmit={handleRegSubmit}>
          <div className="flex flex-col space-y-4 w-80 p-4">
            {regInputs.map((input) => (
              <input
                key={input.id}
                className="p-2 rounded-full shadow-inner focus:outline-sky-800 text-sm"
                type={input.type}
                name={input.name}
                value={regData[input.name]}
                placeholder={input.placeholder}
                onChange={handleRegChange}
              />
            ))}
            <button
              type="submit"
              className="mt-auto px-4 py-2 bg-orange-200 text-xs rounded-full text-sky-950 font-bold hover:bg-orange-300 "
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
      <img
        src={officeImage}
        alt="office"
        className="fixed top-10 w-full h-full object-cover -z-20 opacity-40"
      />
    </div>
  );
};

export default RegisterForm;
