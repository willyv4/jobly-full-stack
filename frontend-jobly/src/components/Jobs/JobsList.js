import { useJobsFetching } from "../../hooks/useJobs";
import Jobs from "./Jobs";
import { FilterForm } from "../FilterForm";
import { useState } from "react";
import { useJobsFiltering, useFilterForm } from "../../hooks/useJobs";
import { INITIAL_STATE, formInputs } from "./JobsFormData";
import BgImage from "../BgImage";
import Loader from "../Loader";

const JobsList = ({ applyToJob, hasApplied }) => {
  const [submitted, setSubmitted] = useState(false);
  const formProps = useFilterForm(INITIAL_STATE, setSubmitted);
  const jobs = useJobsFetching();
  const filter = useJobsFiltering(formProps, submitted, setSubmitted);
  let data = filter ? filter : jobs;

  return (
    <div>
      <div className="mt-20">
        <BgImage />
        <div className="fixed top-[70px] z-10 w-full bg-neutral-950/60 py-6 backdrop-blur-3xl backdrop-filter">
          <div className=" mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-3xl font-bold text-white">
              Find Your Path to Success
            </h1>
            <p className="mb-6 text-xl text-gray-300">
              Discover Exciting Career Opportunities
            </p>

            <div className="flex justify-center">
              <FilterForm formInputs={formInputs} {...formProps} />
            </div>
          </div>
        </div>
      </div>
      {!jobs ? (
        <Loader />
      ) : (
        <div className="mt-[350px] flex flex-row flex-wrap justify-center sm:mt-[300px]">
          {data &&
            data.map((job) => (
              <Jobs
                key={job.id}
                hasApplied={hasApplied}
                applyToJob={applyToJob}
                id={job.id}
                company={job.companyName}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default JobsList;
