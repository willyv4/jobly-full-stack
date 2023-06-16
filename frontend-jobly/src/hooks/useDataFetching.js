import { useState, useEffect } from "react";
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

export const useRegisterUser = (regFormProps, submitted, setSubmitted) => {
  const [currUser, setCurrUser] = useState();

  useEffect(() => {
    const getCurrUser = async () => {
      if (regFormProps.regData && submitted) {
        try {
          const token = await JoblyApi.registerUser(regFormProps.regData);
          setCurrUser(token);
          setSubmitted(false);
        } catch (error) {
          console.error("Error registering user:", error);
        }
      }
    };

    getCurrUser();
  }, [regFormProps.regData, submitted, setSubmitted]);

  return currUser;
};

export const useLoginUser = (loginFormProps, submitted, setSubmitted) => {
  const [currUser, setCurrUser] = useState();

  useEffect(() => {
    const getCurrUser = async () => {
      if (loginFormProps.loginData && submitted) {
        try {
          const token = await JoblyApi.loginUser(loginFormProps.loginData);
          setCurrUser(token);
          setSubmitted(false);
        } catch (error) {
          console.error("Error logging in:", error);
        }
      }
    };

    getCurrUser();
  }, [loginFormProps.loginData, submitted, setSubmitted]);

  return currUser;
};
