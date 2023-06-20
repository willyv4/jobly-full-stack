import { useState } from "react";
import CompanyCard from "./CompanyCard";
import { NavLink } from "react-router-dom";
import { useFilterForm } from "../../hooks/useJobs";
import { FilterForm } from "../FilterForm";
import {
  useCompaniesFetching,
  useCompanyFiltering,
} from "../../hooks/useCompanies";
import { INITIAL_STATE, formInputs } from "./CompanyFormData";
import BgImage from "../BgImage";

const CompanyList = () => {
  const [submitted, setSubmitted] = useState(false);
  const formProps = useFilterForm(INITIAL_STATE, setSubmitted);
  const companies = useCompaniesFetching();
  const filteredCompanies = useCompanyFiltering(
    formProps,
    submitted,
    setSubmitted
  );

  let data = filteredCompanies ? filteredCompanies : companies;

  return (
    <div className="mt-72">
      <BgImage />
      <div className="fixed top-[70px] z-10 w-full bg-neutral-950/60 py-6 backdrop-blur-3xl backdrop-filter">
        <div className=" mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-white">
            Elevate Your Career & Achieve New Heights
          </h1>
          <p className="mb-6 text-xl text-gray-300">
            Explore Jobs and Take the Next Step
          </p>

          <div className="flex justify-center">
            <FilterForm formInputs={formInputs} {...formProps} />
          </div>
        </div>
      </div>
      <div className="mt-40 flex flex-row flex-wrap justify-center">
        {data &&
          data.map((c) => (
            <div key={`${c.handle}-link`}>
              <NavLink to={`${c.handle}`}>
                <CompanyCard
                  description={c.description}
                  name={c.name}
                  numEmployees={c.numEmployees}
                />
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CompanyList;
