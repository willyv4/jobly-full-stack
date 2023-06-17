import { useState } from "react";

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

export const useRegisterForm = (REGISTER_STATE, setRegistered, registered) => {
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
    setRegistered(true);
  };

  return { regData, handleRegChange, handleRegSubmit, setRegData };
};

export const useLoginForm = (LOGIN_STATE, setLgdIn) => {
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
    setLgdIn(true);
  };

  return { loginData, handleLoginChange, handleLoginSubmit, setLoginData };
};
