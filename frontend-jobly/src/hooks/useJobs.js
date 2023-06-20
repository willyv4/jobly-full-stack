import { useState, useEffect } from "react";
import JoblyApi from "../API/api";

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

export const useFilterForm = (initialState, setSubmitted) => {
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
