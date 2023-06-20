import { useState } from "react";
import { useLogin, useLoginForm } from "../../hooks/useAuth/useLogin";
import { LoginInputs } from "../Authentication/AuthFormData";
import BgImage from "../BgImage";
import Message from "./ErrorMessage";

const LoginForm = ({ setAuthorized }) => {
  const [calledLogin, setCalledLogin] = useState(false);
  const [loginData, setLoginData, handleLoginChange, handleLoginSubmit] =
    useLoginForm(setCalledLogin);
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
      <Message message={message} />
      <div className="rounded-md bg-neutral-50  p-4 shadow-lg">
        <form onSubmit={handleLoginSubmit}>
          <div className="flex w-80 flex-col space-y-4 p-4 ">
            {LoginInputs.map((input) => (
              <input
                key={input.id}
                className="rounded-full p-2 text-sm shadow-inner focus:outline-sky-800"
                type={input.type}
                name={input.name}
                value={loginData[input.name]}
                placeholder={input.placeholder}
                onChange={handleLoginChange}
              />
            ))}
            <button
              type="submit"
              className="mt-auto rounded-full bg-teal-200 px-4 py-2 text-xs font-bold text-neutral-950 hover:bg-teal-300 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
