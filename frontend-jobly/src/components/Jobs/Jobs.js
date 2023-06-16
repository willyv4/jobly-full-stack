const Jobs = ({ company, title, salary, equity }) => {
  return (
    <div className="flex bg-sky-50 min-w-[24rem] w-[30rem] h-fit rounded-lg relative shadow-lg p-4 justify-between m-4">
      <div className={`flex-col p-4 -mt-2`}>
        {company && <small className="text-xs">Company: {company}</small>}
        <h2 className="text-l font-bold mb-2 mt-2">{title}</h2>
        <div className="flex justify-start">
          <p className="mr-4 bg-sky-950 p-1 px-2 text-orange-200 rounded-full font-bold text-xs">
            Salary: {!salary ? "Non-Disclosed" : salary}
          </p>
          <p className="bg-sky-950 p-1 px-2 text-orange-200 rounded-full font-bold text-xs">
            Equity: {!equity ? "Non-Disclosed" : equity}
          </p>
        </div>
      </div>
      <button
        className={`absolute m-4 px-8 w-30 h-12 border-2 border-orange-300 rounded-full text-sky-950 text-sm font-bold ${
          company ? "right-0 top-12" : "right-0 top-7"
        }`}
      >
        Apply
      </button>
    </div>
  );
};

export default Jobs;
