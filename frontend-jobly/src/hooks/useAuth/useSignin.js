import { useState, useEffect } from "react";
import { REGISTER_STATE } from "../../components/Authentication/AuthFormData";
import { useNavigate } from "react-router-dom";
import JoblyApi from "../../API/api";

//
//
// useSignup
export const useSignup = (
  sData,
  setSData,
  setAuthorized,
  calledSignup,
  setCalledSignup
) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  async function signup() {
    try {
      const token = await JoblyApi.signup(sData);
      setAuthorized({ token: token, username: sData.username });
      setCalledSignup(false);
      setSData(REGISTER_STATE);
      navigate("/");
    } catch (error) {
      // console.log(error);
      setMessage(error[0]);
      setCalledSignup(false);
      setSData(REGISTER_STATE);
    }
  }

  // keep from submitting req twice
  useEffect(() => {
    if (calledSignup) signup();
  });

  return [message];
};

export const useSignupForm = (setCalledSignup) => {
  const [regData, setRegData] = useState(REGISTER_STATE);

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegData((prevRegData) => ({
      ...prevRegData,
      [name]: value,
    }));
  };

  const handleRegSubmit = (e) => {
    e.preventDefault();
    setCalledSignup(true);
  };

  return [regData, setRegData, handleRegChange, handleRegSubmit];
};
