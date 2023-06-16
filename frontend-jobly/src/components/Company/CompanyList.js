import { useState } from "react";
import CompanyCard from "./CompanyCard";
import { NavLink } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { FilterForm } from "../FilterForm";
import {
  useFilterFetching,
  useCompaniesFetching,
} from "../../hooks/useDataFetching";

const CompanyList = () => {
  const INITIAL_STATE = {
    name: "",
    min: "",
    max: "",
  };

  const [submitted, setSubmitted] = useState(false);
  const { formData, handleChange, handleSubmit } = useForm(
    INITIAL_STATE,
    setSubmitted
  );
  const companies = useCompaniesFetching();
  const filter = useFilterFetching(formData, submitted, setSubmitted);
  let data = filter ? filter : companies;

  const formInputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Company",
      border: "rounded-l-full",
    },
    {
      name: "min",
      type: "number",
      placeholder: "Min Size",
    },
    {
      name: "max",
      type: "number",
      placeholder: "Max Size",
    },
  ];

  return (
    <div className="mt-28">
      <div className="fixed flex justify-center items-center bg-sky-950 p-6 w-full z-10 top-20 -mt-2">
        <FilterForm
          formInputs={formInputs}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className="flex flex-row flex-wrap justify-center mt-40">
        {data &&
          data.map((c) => (
            <>
              <NavLink key={`${c.handle}-link`} to={`${c.handle}`}>
                <CompanyCard
                  key={c.handle}
                  description={c.description}
                  name={c.name}
                  numEmployees={c.numEmployees}
                />
              </NavLink>
            </>
          ))}
      </div>
    </div>
  );
};

export default CompanyList;
