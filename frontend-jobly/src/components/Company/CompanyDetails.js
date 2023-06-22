import { useNavigate, useParams } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import { useCompanyFetching } from "../../hooks/useCompanies";
import BgImage from "../BgImage";
import { useEffect } from "react";
import Loader from "../Loader";

const CompanyDetails = ({ applyToJob, hasApplied, setDataLoaded }) => {
  const { handle } = useParams();
  const navigate = useNavigate();

  // if company data else false --- while loading null
  const company = useCompanyFetching(handle, setDataLoaded);

  useEffect(() => {
    if (company === false) return navigate("/companies");
  }, [company, navigate]);

  return (
    <div className="mt-20">
      <BgImage />
      <div className="fixed top-[70px] z-10 w-full bg-neutral-950/60 py-6 backdrop-blur-3xl backdrop-filter">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-white">
            {company?.name}
          </h1>
          <p className="mb-6 text-xl text-gray-300">{company?.description}</p>
          <p className="text-lg text-gray-400">
            Number of Employees: {company?.numEmployees}
          </p>
        </div>
      </div>
      {company === null ? (
        <Loader />
      ) : (
        <div className="mt-[350px] flex flex-row flex-wrap justify-center sm:mt-[300px]">
          {company.jobs &&
            company.jobs.map((job) => (
              <Jobs
                key={job.id}
                hasApplied={hasApplied}
                applyToJob={applyToJob}
                id={job.id}
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

export default CompanyDetails;
