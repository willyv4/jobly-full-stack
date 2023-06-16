import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CompanyList from "./components/Company/CompanyList";
import CompanyDetails from "./components/Company/CompanyDetails";
import JobsList from "./components/Jobs/JobsList";
import RegisterForm from "./components/Authentication/RegisterForm";
import LoginForm from "./components/Authentication/LoginForm";
import { useRegisterForm, useLoginForm } from "./hooks/useForm";
import { useRegisterUser, useLoginUser } from "./hooks/useDataFetching";
import {
  REGISTER_STATE,
  LOGIN_STATE,
  regInputs,
  LoginInputs,
} from "./components/Authentication/AuthFormData";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const regFormProps = useRegisterForm(REGISTER_STATE, setIsRegistered);
  const loginFormProps = useLoginForm(LOGIN_STATE, setIsLoggedIn);
  const regUser = useRegisterUser(regFormProps, isRegistered, setIsRegistered);
  const logUser = useLoginUser(loginFormProps, isLoggedIn, setIsLoggedIn);
  let currUser = logUser ? logUser : regUser;
  console.log(currUser, "CURRENTUSER");

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route
            path="/create-account"
            element={<RegisterForm regInputs={regInputs} {...regFormProps} />}
          />
          <Route
            path="/login"
            element={<LoginForm formInputs={LoginInputs} {...loginFormProps} />}
          />
          <Route path="/profile" element={true} />
          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
          {/* <Route path="/404" element={<NotFound />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
