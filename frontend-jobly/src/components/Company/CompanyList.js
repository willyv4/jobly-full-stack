import { useState } from "react";
import CompanyCard from "./CompanyCard";
import { NavLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { FilterForm } from "../FilterForm";
import {
  useFilterFetching,
  useCompaniesFetching,
} from "../../hooks/useDataFetching";
import officeImage from "../../assets/office.png";
import { INITIAL_STATE, formInputs } from "./CompanyFormData";

const CompanyList = () => {
  const [submitted, setSubmitted] = useState(false);
  const formProps = useForm(INITIAL_STATE, setSubmitted);
  const companies = useCompaniesFetching();
  const filteredCompanies = useFilterFetching(
    formProps,
    submitted,
    setSubmitted
  );
  let data = filteredCompanies ? filteredCompanies : companies;

  return (
    <div className="mt-28">
      <div className="fixed flex justify-center items-center bg-sky-950 p-6 w-full z-10 top-20 -mt-2">
        <FilterForm formInputs={formInputs} {...formProps} />
      </div>
      <img
        src={officeImage}
        alt="office"
        className="fixed top-10 w-full h-full object-cover -z-20 opacity-40"
      />
      <div className="flex flex-row flex-wrap justify-center mt-40">
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
