import { useState, useEffect } from "react";
import JoblyApi from "../../API/api";

export const useGetCurrUser = (authorized, setHasApplied) => {
  const [currUser, setCurrUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const username = authorized.username;
  const token = authorized.token;

  useEffect(() => {
    async function getUser() {
      setIsLoading(true);
      try {
        const user = await JoblyApi.getUserInfo(username);
        setCurrUser(user);
        setHasApplied(new Set(user.applications));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }

    if (token) getUser();
  }, [token, isLoading]);

  return [currUser, setCurrUser, isLoading];
};
