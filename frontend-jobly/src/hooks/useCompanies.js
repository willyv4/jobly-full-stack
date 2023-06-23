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

export const useCompanyFiltering = (formProps, submitted, setSubmitted) => {
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
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompany(companyData);
      } catch (e) {
        setCompany(true);
      }
    };

    if (handle) fetchCompany();
  }, [handle]);

  return company;
};
