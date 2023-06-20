const Jobs = ({
  hasApplied,
  applyToJob,
  id,
  company,
  title,
  salary,
  equity,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    applyToJob(id);
  };

  const applied = hasApplied.has(id);

  return (
    <div className="relative m-4 flex h-fit w-[30rem] min-w-[24rem] justify-between rounded-md bg-neutral-50 p-4 shadow-lg">
      <div className={`-mt-2 flex-col p-4`}>
        {company && <small className="text-xs">Company: {company}</small>}
        <h2 className="text-l mb-2 mt-2 font-bold">{title}</h2>
        <div className="flex justify-start">
          <p className="mr-4 rounded-full bg-neutral-800 p-1 px-2 text-[10px] font-bold text-teal-100">
            Salary: {!salary ? "Non-Disclosed" : salary}
          </p>
          <p className="rounded-full bg-neutral-800 p-1 px-2 text-[10px] font-bold text-teal-100">
            Equity: {!equity ? "Non-Disclosed" : equity}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input className="hidden" defaultValue={id} />
        <button
          className={`w-30 absolute m-4 h-10 rounded-full border-2 border-teal-500 px-6 text-xs font-bold text-neutral-900 ${
            company ? "right-0 top-[58px]" : "right-0 top-8"
          } ${applied && "bg-teal-500"}`}
        >
          {applied ? "Good Luck" : "Apply"}
        </button>
      </form>
    </div>
  );
};

export default Jobs;
