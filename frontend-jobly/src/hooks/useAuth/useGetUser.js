import { useState, useEffect } from "react";
import JoblyApi from "../../API/api";

export const useGetCurrUser = (authorized, setHasApplied) => {
  const [currUser, setCurrUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const username = authorized.username;
  const token = authorized.token;

  // 
  useEffect(() => {
    async function getUser() {
      setIsLoading(true);
      try {
        const user = await JoblyApi.getUserInfo(username);
        setCurrUser(user);
        setHasApplied(new Set(user.applications));
        setIsLoading(false);
        setDataLoaded(true);
      } catch (err) {
        setIsLoading(false);
        setDataLoaded(true);
      }
    }

    if (token && !dataLoaded) getUser();
  }, [token, isLoading, setHasApplied, username, dataLoaded]);

  return [currUser, setCurrUser, isLoading, setDataLoaded];
};
