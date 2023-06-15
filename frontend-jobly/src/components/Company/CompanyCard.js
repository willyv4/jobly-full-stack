const CompanyCard = ({ description, name, numEmployees }) => {
  return (
    <div className="mt-6 m-4 transition-transform transition-timing duration-500 ease-in-out hover:scale-105 cursor-pointer">
      <div className="bg-sky-50 w-80 h-60 rounded-lg shadow-lg p-4 relative">
        <p className="text-2xl text-sky-950 font-bold mb-4">{name}</p>
        <div className="border-b-2 border-sky-950 mb-2"></div>
        <p className="text-zinc-500">{description}</p>
        <small className="absolute bottom-4 right-4 bg-sky-950 p-2 rounded-full text-orange-200">
          Company Size: {numEmployees}
        </small>
      </div>
    </div>
  );
};

export default CompanyCard;
