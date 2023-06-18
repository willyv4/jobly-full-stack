import { useState } from "react";
import {
  REGISTER_STATE,
  LOGIN_STATE,
} from "../components/Authentication/AuthFormData";

export const useForm = (initialState, setSubmitted) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return { formData, handleChange, handleSubmit };
};

export const useSignupForm = (setCalledSignup) => {
  const [regData, setRegData] = useState(REGISTER_STATE);

  console.log(regData);

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

  return {
    regData,
    setRegData,
    handleRegChange,
    handleRegSubmit,
  };
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

  return { loginData, setLoginData, handleLoginChange, handleLoginSubmit };
};

// export const useProfileForm = (userInfo, setUpdate) => {
//   const PROFILE_STATE = {
//     firstName: "",
//     lastName: userInfo?.lastName,
//     email: userInfo?.email,
//   };
//   const [profData, setProfData] = useState(PROFILE_STATE);

//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfData((prevProfData) => ({
//       ...prevProfData,
//       [name]: value,
//     }));
//   };

//   const handleProfileSubmit = (e) => {
//     e.preventDefault();
//     setUpdate(true);
//   };

//   return { profData, handleProfileChange, handleProfileSubmit, PROFILE_STATE };
// };
