export const INITIAL_STATE = {
  title: "",
  min: "",
  equity: "",
};

export const formInputs = [
  {
    name: "title",
    type: "text",
    placeholder: "Title",
    border: "rounded-l-full",
  },
  {
    name: "min",
    type: "text",
    placeholder: "Min Salary",
  },
  {
    name: "equity",
    type: "text",
    options: [{ Equity: "" }, { Yes: "true" }, { No: "false" }],
  },
];
