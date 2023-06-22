import { useProfUpdate, useProfileForm } from "../../hooks/useProfile";
import { ProfFormInputs } from "./FormData";
import { useState, useContext } from "react";
import BgImage from "../BgImage";
import Message from "../Authentication/ErrorMessage";
import CurrUserContext from "../Authentication/CurrUserContext";

const UserProf = () => {
  const { userInfo } = useContext(CurrUserContext);
  const [submitted, setSubmitted] = useState(false);
  const [profData, handleProfileChange, handleProfileSubmit] = useProfileForm(
    userInfo,
    setSubmitted
  );
  const [message] = useProfUpdate(profData, submitted, setSubmitted, userInfo);

  return (
    <div className="flex h-screen items-center justify-center">
      <BgImage />
      <Message message={message || null} />
      <div className="rounded-md bg-neutral-50  p-4 ">
        <form onSubmit={handleProfileSubmit}>
          <p className="text-center text-lg font-bold">
            Update Your information
          </p>
          <div className="flex w-80 flex-col space-y-4 p-4">
            {ProfFormInputs.map((input) => (
              <input
                key={input.id}
                className="rounded-full p-2 text-sm shadow-inner focus:outline-teal-300"
                type={input.type}
                name={input.name}
                value={profData[input.name]}
                onChange={handleProfileChange}
              />
            ))}
            <button
              type="submit"
              className=" mt-auto rounded-full bg-teal-200 px-4 py-2 text-xs font-bold text-black hover:animate-pulse"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProf;
