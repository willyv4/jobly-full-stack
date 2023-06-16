export const REGISTER_STATE = {
  username: "",
  password: "",
  first: "",
  last: "",
  email: "",
};

export const LOGIN_STATE = {
  username: "",
  password: "",
};

export const regInputs = [
  {
    id: "register-username",
    name: "username",
    type: "text",
    placeholder: "Username",
  },
  {
    id: "register-password",
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    id: "register-first",
    name: "first",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: "register-last",
    name: "last",
    type: "text",
    placeholder: "Last Name",
  },
  {
    id: "register-email",
    name: "email",
    type: "email",
    placeholder: "Email",
  },
];

export const LoginInputs = [
  {
    id: "login-username",
    name: "username",
    type: "text",
    placeholder: "Username",
  },
  {
    id: "login-password",
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];
