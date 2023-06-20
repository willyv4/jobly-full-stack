import { useState } from "react";
import { useSignup, useSignupForm } from "../../hooks/useAuth/useSignin";
import BgImage from "../BgImage";
import { regInputs } from "./AuthFormData";
import Message from "./ErrorMessage";

const SignupForm = ({ setAuthorized }) => {
  const [calledSignup, setCalledSignup] = useState(false);
  const [regData, setRegData, handleRegChange, handleRegSubmit] =
    useSignupForm(setCalledSignup);
  const [message] = useSignup(
    regData,
    setRegData,
    setAuthorized,
    calledSignup,
    setCalledSignup
  );

  return (
    <div className="flex h-screen items-center justify-center">
      <BgImage />
      <Message message={message} />
      <div className="rounded-md bg-neutral-50  p-4 shadow-lg">
        <form onSubmit={handleRegSubmit}>
          <div className="flex w-80 flex-col space-y-4 p-4">
            {regInputs.map((input) => (
              <input
                key={input.id}
                className="rounded-full p-2 text-sm shadow-inner focus:outline-sky-800"
                type={input.type}
                name={input.name}
                value={regData[input.name]}
                placeholder={input.placeholder}
                onChange={handleRegChange}
              />
            ))}
            <button
              type="submit"
              className="mt-auto rounded-full bg-teal-200 px-4 py-2 text-xs font-bold text-neutral-950 hover:bg-teal-300 "
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
