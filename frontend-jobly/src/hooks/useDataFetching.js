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

export const useFilterFetching = (formData, submitted, setSubmitted) => {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchFilteredCompanies = async () => {
      if (formData && submitted) {
        const filteredCompanies = await JoblyApi.filterCompanies(formData);
        setFilter(filteredCompanies);
        setSubmitted(false);
      }
    };

    fetchFilteredCompanies();
  }, [formData, submitted, setSubmitted]);

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

export const useJobsFiltering = (formData, submitted, setSubmitted) => {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      if (formData && submitted) {
        const filteredJobs = await JoblyApi.filterJobs(formData);
        setFilter(filteredJobs);
        setSubmitted(false);
      }
    };

    fetchJobs();
  }, [formData, submitted, setSubmitted]);
  return filter;
};
