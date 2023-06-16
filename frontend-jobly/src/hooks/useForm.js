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

export const useRegisterForm = (REGISTER_STATE, setSubmitted) => {
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
    setSubmitted(true);
  };

  return { regData, handleRegChange, handleRegSubmit };
};

export const useLoginForm = (LOGIN_STATE, setSubmitted) => {
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
    setSubmitted(true);
  };

  return { loginData, handleLoginChange, handleLoginSubmit };
};
