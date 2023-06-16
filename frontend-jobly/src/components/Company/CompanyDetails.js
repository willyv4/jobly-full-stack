import { useNavigate, useParams } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import { useCompanyFetching } from "../../hooks/useDataFetching";
import officeImage from "../../assets/office.png";

const CompanyDetails = () => {
  const { handle } = useParams();
  const navigate = useNavigate();
  const company = useCompanyFetching(handle);

  if (!company) return navigate("/");

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

      <img
        src={officeImage}
        alt="office"
        className="fixed top-10 w-full h-full object-cover -z-20 opacity-40"
      />

      <div className="mt-[350px] sm:mt-[300px] flex flex-row flex-wrap justify-center">
        {company.jobs &&
          company.jobs.map((job) => (
            <Jobs
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
