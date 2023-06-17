import { useJobsFetching } from "../../hooks/useDataFetching";
import Jobs from "./Jobs";
import { FilterForm } from "../FilterForm";
import { useState, useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useJobsFiltering } from "../../hooks/useDataFetching";
import officeImage from "../../assets/office.png";
import { INITIAL_STATE, formInputs } from "./JobsFormData";
import CurrUserContext from "../Authentication/CurrUserContext";
import { useNavigate } from "react-router-dom";

const JobsList = () => {
  const [submitted, setSubmitted] = useState(false);
  const formProps = useForm(INITIAL_STATE, setSubmitted);
  const jobs = useJobsFetching();
  const filter = useJobsFiltering(formProps, submitted, setSubmitted);
  let data = filter ? filter : jobs;
  const navigate = useNavigate();
  const CURR_USER = useContext(CurrUserContext);

  useEffect(() => {
    if (!CURR_USER) {
      navigate("/");
    }
  }, [CURR_USER, navigate]);

  return (
    <div>
      <div className="mt-20">
        <div className="fixed w-full z-10 bg-sky-950 py-6 top-[70px]">
          <div className=" text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Find Your Path to Success
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Discover Exciting Career Opportunities
            </p>

            <div className="flex justify-center">
              <FilterForm formInputs={formInputs} {...formProps} />
            </div>
          </div>
        </div>
      </div>
      <img
        src={officeImage}
        alt="office"
        className="fixed top-10 w-full h-full object-cover -z-20 opacity-40"
      />
      <div className="mt-[350px] sm:mt-[300px] flex flex-row flex-wrap justify-center">
        {data &&
          data.map((job) => (
            <Jobs
              key={job.id}
              company={job.companyName}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
            />
          ))}
      </div>
    </div>
  );
};

export default JobsList;
