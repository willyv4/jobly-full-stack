import React from "react";
import officeImage from "../../assets/office.png";
import { useContext, useEffect } from "react";
import CurrUserContext from "./CurrUserContext";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "./ErrorMessage";
import { useLoginForm } from "../../hooks/useForm";
import { useState } from "react";
import { useLogin } from "../../hooks/useDataFetching";
import { LoginInputs } from "../Authentication/AuthFormData";

const LoginForm = ({ setToken }) => {
  const navigate = useNavigate();
  const CURR_USER = useContext(CurrUserContext);

  const [calledLogin, setCalledLogin] = useState(false);
  const { loginData, setLoginData, handleLoginChange, handleLoginSubmit } =
    useLoginForm(setCalledLogin);

  const [loginErr] = useLogin(
    loginData,
    setLoginData,
    setToken,
    calledLogin,
    setCalledLogin
  );

  useEffect(() => {
    if (CURR_USER) {
      navigate("/");
    }
  }, [CURR_USER, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-lg  border-2 border-sky-800">
        <form onSubmit={handleLoginSubmit}>
          <div className="flex flex-col space-y-4 w-80 p-4 ">
            {LoginInputs.map((input) => (
              <input
                key={input.id}
                className="p-2 rounded-full shadow-inner focus:outline-sky-800 text-sm"
                type={input.type}
                name={input.name}
                value={loginData[input.name]}
                placeholder={input.placeholder}
                onChange={handleLoginChange}
              />
            ))}
            <button
              type="submit"
              className="mt-auto px-4 py-2 bg-orange-200 text-xs rounded-full text-sky-950 font-bold hover:bg-orange-300 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <img
        src={officeImage}
        alt="office"
        className="fixed top-10 w-full h-full object-cover -z-20 opacity-70"
      />
      <ErrorMsg message={loginErr} />
    </div>
  );
};

export default LoginForm;
