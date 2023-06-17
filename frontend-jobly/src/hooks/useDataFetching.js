import { useState, useEffect } from "react";
import {
  LOGIN_STATE,
  REGISTER_STATE,
} from "../components/Authentication/AuthFormData";
import JoblyApi from "../API/api";

export const useCompaniesFetching = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesData = await JoblyApi.getCompanies();
      setCompanies(companiesData);
    };

    fetchCompanies();
  }, []);

  return companies;
};

export const useFilterFetching = (formProps, submitted, setSubmitted) => {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchFilteredCompanies = async () => {
      if (formProps.formData && submitted) {
        const filteredCompanies = await JoblyApi.filterCompanies(
          formProps.formData
        );
        setFilter(filteredCompanies);
        setSubmitted(false);
      }
    };

    fetchFilteredCompanies();
  }, [formProps.formData, submitted, setSubmitted]);

  return filter;
};

export const useCompanyFetching = (handle) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      if (handle) {
        try {
          const companyData = await JoblyApi.getCompany(handle);
          setCompany(companyData);
        } catch (e) {
          console.log(e);
        }
      }
    };

    fetchCompany();
  }, [handle]);

  return company;
};

export const useJobsFetching = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    };

    fetchJobs();
  }, []);
  return jobs;
};

export const useJobsFiltering = (formProps, submitted, setSubmitted) => {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      if (formProps.formData && submitted) {
        const filteredJobs = await JoblyApi.filterJobs(formProps.formData);
        setFilter(filteredJobs);
        setSubmitted(false);
      }
    };

    fetchJobs();
  }, [formProps.formData, submitted, setSubmitted]);
  return filter;
};

export const useAuthUser = (
  regProps,
  logProps,
  registered,
  setRegistered,
  lgdIn,
  setLgdIn
) => {
  const [currUser, setCurrUser] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    //
    // REGISTER USER
    const registerUser = async () => {
      if (regProps.regData && registered) {
        try {
          const token = await JoblyApi.registerUser(regProps.regData);
          const user = { token: token, user: regProps.regData.username };
          localStorage.setItem("CURR_USER", JSON.stringify(user));
          setCurrUser(user);
          setRegistered(false);
          regProps.setRegData(REGISTER_STATE);
        } catch (error) {
          setErrMsg(error[0]);
          setRegistered(false);
          regProps.setRegData(REGISTER_STATE);
        }
      }
    };

    //
    // LOGIN USER
    const loginUser = async () => {
      if (logProps.loginData && lgdIn) {
        try {
          const token = await JoblyApi.loginUser(logProps.loginData);
          const user = { token: token, user: logProps.loginData.username };
          localStorage.setItem("CURR_USER", JSON.stringify(user));
          setCurrUser(user);
          setLgdIn(false);
          logProps.setLoginData(LOGIN_STATE);
        } catch (error) {
          setErrMsg(error[0]);
          setLgdIn(false);
          logProps.setLoginData(LOGIN_STATE);
        }
      }
    };

    registerUser();
    loginUser();
  }, [regProps, logProps, registered, setRegistered, lgdIn, setLgdIn]);

  //
  // LOGOUT USER
  const logoutUser = () => {
    setCurrUser(null);
    setLgdIn(false);
    setRegistered(false);
    localStorage.removeItem("CURR_USER");
  };

  return { currUser, logoutUser, errMsg };
};
