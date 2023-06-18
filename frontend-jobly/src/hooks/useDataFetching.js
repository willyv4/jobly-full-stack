import { useState, useEffect } from "react";
import JoblyApi from "../API/api";
import {
  REGISTER_STATE,
  LOGIN_STATE,
} from "../components/Authentication/AuthFormData";

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

export const useSignup = (
  sData,
  setSData,
  setToken,
  calledSignup,
  setCalledSignup
) => {
  const [err, setErr] = useState();

  useEffect(() => {
    async function signup() {
      try {
        const token = await JoblyApi.signup(sData);
        setToken(token);
        setCalledSignup(false);
        setSData(REGISTER_STATE);
      } catch (error) {
        console.log(error);
        setErr(error);
        setCalledSignup(false);
        setSData(REGISTER_STATE);
      }
    }

    if (calledSignup) signup();
  }, [sData, setSData, setToken, calledSignup, setCalledSignup]);

  return [err];
};

export const useLogin = (
  lData,
  setLData,
  setToken,
  calledLogin,
  setCalledLogin
) => {
  const [err, setErr] = useState();

  useEffect(() => {
    async function login() {
      try {
        const token = await JoblyApi.login(lData);
        setToken(token);
        setCalledLogin(false);
        setLData(LOGIN_STATE);
      } catch (error) {
        console.log(error);
        setErr(error);
        setCalledLogin(false);
        setLData(LOGIN_STATE);
      }
    }

    if (calledLogin) {
      login();
    }
  }, [calledLogin, lData, setLData, setToken, setCalledLogin]);

  return [err];
};

export const useGetUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [submit, setSubmit] = useState(true);

  const fetchData = async () => {
    const storedData = localStorage.getItem("CURR_USER");
    const user = JSON.parse(storedData);
    if (user && user.token) {
      const res = await JoblyApi.getUserInfo(user.user);
      setUserInfo(res.user);
      setSubmit(false);
    }
  };

  if (submit) fetchData();

  return userInfo;
};

export const useProfUpdate = (profData, submitted, setSubmitted, username) => {
  const [userUpdates, setUserUpdates] = useState(null);

  useEffect(() => {
    const getUpdates = async () => {
      if (submitted) {
        const companiesData = await JoblyApi.updateUser(profData, username);
        setUserUpdates(companiesData);
        setSubmitted(false);
        setUserUpdates(profData.PROFILE_STATE);
      }
    };

    getUpdates();
  }, [profData, submitted, setSubmitted, username]);

  return userUpdates;
};
