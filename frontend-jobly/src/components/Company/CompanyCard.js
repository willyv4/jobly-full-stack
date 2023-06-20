const CompanyCard = ({ description, name, numEmployees }) => {
  return (
    <div className="transition-timing m-4 mt-6 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 ">
      <div className="relative h-60 w-80 rounded bg-neutral-50 p-4">
        <p className="mb-4 text-2xl font-bold text-neutral-900">{name}</p>
        <div className="mb-2 border-b-2 border-neutral-900"></div>
        <p className="text-neutral-600">{description}</p>
        <small className="absolute bottom-4 right-4 rounded-full border-2 border-teal-500 p-2 text-teal-800">
          Company Size: {numEmployees}
        </small>
      </div>
    </div>
  );
};

export default CompanyCard;
