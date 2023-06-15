const CompanyJobs = ({ title, salary, equity }) => {
  return (
    <div className="flex bg-sky-50 min-w-[24rem] w-[30rem] h-fit rounded-lg relative shadow-lg p-4 justify-between m-4">
      <div className="flex-col">
        <h2 className="text-l font-bold mb-2">{title}</h2>
        <div className="border-b-2 border-sky-950 mt-4 mb-4"></div>
        <div className="flex justify-start">
          <p className="mr-4 bg-sky-950 px-2 text-orange-200 rounded-full text-xs">
            Salary: {salary}
          </p>
          <p className="bg-sky-950 px-2 text-orange-200 rounded-full text-xs">
            Equity: {equity}
          </p>
        </div>
      </div>
      <button className="m-4 px-8 w-30 h-12 border-2 border-orange-300 rounded-full text-sky-950 text-sm font-bold">
        Apply
      </button>
    </div>
  );
};

export default CompanyJobs;
