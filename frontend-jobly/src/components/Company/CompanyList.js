import { useEffect, useState } from "react";
import JoblyApi from "../../api";
import CompanyCard from "./CompanyCard";
import { NavLink } from "react-router-dom";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    };

    getData();
  }, []);

  return (
    <div className="mt-28">
      <form className="flex items-center justify-center">
        <input
          className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search"
        />
        <button className="px-4 py-2 bg-orange-200 text-sky-950 font-bold rounded-r hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </form>
      <div className=" flex flex-row flex-wrap justify-center">
        {companies.map((c) => (
          <>
            <NavLink key={`${c.handle}-link`} to={`${c.handle}`}>
              <CompanyCard
                key={c.handle}
                description={c.description}
                name={c.name}
                numEmployees={c.numEmployees}
              />
            </NavLink>
          </>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
