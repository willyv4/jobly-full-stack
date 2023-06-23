import { useState, useEffect } from "react";
import { LOGIN_STATE } from "../../components/Authentication/AuthFormData";
import { useNavigate } from "react-router-dom";
import JoblyApi from "../../API/api";

export const useLogin = (
  lData,
  setLData,
  setAuthorized,
  calledLogin,
  setCalledLogin
) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  //keep from submitting req twice
  useEffect(() => {
    async function login() {
      try {
        const token = await JoblyApi.login(lData);
        setAuthorized({ token: token, username: lData.username });
        setCalledLogin(false);
        setLData(LOGIN_STATE);
        navigate("/");
      } catch (error) {
        setMessage(error[0]);
        setCalledLogin(false);
        setLData(LOGIN_STATE);
      }
    }

    if (calledLogin) login();
  }, [calledLogin, lData, navigate, setAuthorized, setCalledLogin, setLData]);

  return [message];
};

export const useLoginForm = (setCalledLogin) => {
  const [loginData, setLoginData] = useState(LOGIN_STATE);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setCalledLogin(true);
  };

  return [loginData, setLoginData, handleLoginChange, handleLoginSubmit];
};

export const useGuestLogin = (setCalledLogin) => {
  const [loginData, setLoginData] = useState({
    username: "guest",
    password: "guest",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setCalledLogin(true);
  };

  return [loginData, setLoginData, handleLoginSubmit];
};
