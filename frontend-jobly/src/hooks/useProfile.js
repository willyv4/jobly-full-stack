import { useState, useEffect } from "react";
import JoblyApi from "../API/api";

// UPDATE PROFILE API CALL
export const useProfUpdate = (profData, submitted, setSubmitted, CURR_USER) => {
  const [userUpdates, setUserUpdates] = useState(null);
  const [message, setMessage] = useState(null);

  const getUpdates = async () => {
    try {
      const userUpdates = await JoblyApi.updateUser(
        profData,
        CURR_USER.username
      );
      setUserUpdates(userUpdates);
      setMessage("Update succesful");
      setSubmitted(false);
    } catch (err) {
      setMessage("Error, make sure every input is filled out!");
      setSubmitted(false);
    }
  };

  if (submitted) getUpdates();

  return [message];
};

// UPDATE PROFILE FORM
export const useProfileForm = (CURR_USER, setSubmitted) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const [profData, setProfData] = useState(initialState);

  useEffect(() => {
    if (CURR_USER) {
      setProfData({
        firstName: CURR_USER.firstName || "",
        lastName: CURR_USER.lastName || "",
        email: CURR_USER.email || "",
      });
    }
  }, [CURR_USER]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfData((prevProfData) => ({
      ...prevProfData,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return [profData, handleProfileChange, handleProfileSubmit];
};
