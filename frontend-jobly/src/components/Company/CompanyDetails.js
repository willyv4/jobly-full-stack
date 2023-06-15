import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "../../api";
import CompanyJobs from "./CompanyJobs";

const CompanyDetails = () => {
  const [company, setCompany] = useState([]);
  const { handle } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
      } catch (e) {
        return navigate(`/`);
      }
    };

    getData();
  }, [handle, navigate]);

  return (
    <div className="mt-20">
      <div className="fixed w-full z-10 bg-sky-950 py-6 top-[70px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">{company.name}</h1>
          <p className="text-xl text-gray-300 mb-6">{company.description}</p>
          <p className="text-lg text-gray-400">
            Number of Employees: {company.numEmployees}
          </p>
        </div>
      </div>

      <div className="mt-[350px] sm:mt-[300px] flex flex-row flex-wrap justify-center">
        {company.jobs &&
          company.jobs.map((job) => (
            <CompanyJobs
              key={job.id}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
            />
          ))}
      </div>
    </div>
  );
};

export default CompanyDetails;
