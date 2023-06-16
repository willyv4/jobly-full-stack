export const FilterForm = ({
  formInputs,
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="bg-sky-950 rounded-full p-2">
      {formInputs.map((input) => {
        if (input.options) {
          return (
            <select
              placeholder="Equity"
              key={input.name}
              className="text-xs w-1/4 p-2 py-2 hover:shadow-inner focus:shadow-inner focus:outline-none"
              name={input.name}
              value={formData[input.name]}
              onChange={handleChange}
            >
              {input.options.map((option) => {
                const [key, value] = Object.entries(option)[0];
                return (
                  <option key={key} value={value}>
                    {key}
                  </option>
                );
              })}
            </select>
          );
        } else {
          return (
            <input
              key={input.name}
              className={`text-xs w-1/4 p-2 py-2 hover:shadow-inner focus:shadow-inner focus:outline-none ${input.border}`}
              type={input.type}
              name={input.name}
              value={formData[input.name]}
              placeholder={input.placeholder}
              onChange={handleChange}
            />
          );
        }
      })}
      <button
        type="submit"
        className="px-4 py-2 bg-orange-200 text-xs rounded-r-full text-sky-950 font-bold hover:bg-orange-300"
      >
        Filter
      </button>
    </form>
  );
};
