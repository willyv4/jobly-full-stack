import { useState } from "react";
import CurrUserContext from "./components/Authentication/CurrUserContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CompanyList from "./components/Company/CompanyList";
import CompanyDetails from "./components/Company/CompanyDetails";
import JobsList from "./components/Jobs/JobsList";
import RegisterForm from "./components/Authentication/RegisterForm";
import LoginForm from "./components/Authentication/LoginForm";
import { useRegisterForm, useLoginForm } from "./hooks/useForm";
import { useAuthUser } from "./hooks/useDataFetching";
import LogOut from "./components/Authentication/LogOut";
import {
  REGISTER_STATE,
  LOGIN_STATE,
  regInputs,
  LoginInputs,
} from "./components/Authentication/AuthFormData";

function App() {
  const [lgdIn, setLgdIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const regProps = useRegisterForm(REGISTER_STATE, setRegistered, registered);
  const logProps = useLoginForm(LOGIN_STATE, setLgdIn, lgdIn);
  const { logoutUser, errMsg } = useAuthUser(
    regProps,
    logProps,
    registered,
    setRegistered,
    lgdIn,
    setLgdIn
  );

  const storedData = localStorage.getItem("CURR_USER");
  const CURR_USER = JSON.parse(storedData);

  return (
    <CurrUserContext.Provider value={CURR_USER}>
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
              element={<RegisterForm regInputs={regInputs} {...regProps} />}
            />
            <Route
              path="/login"
              element={
                <LoginForm
                  formInputs={LoginInputs}
                  {...logProps}
                  errMsg={errMsg}
                />
              }
            />
            <Route
              path="/logout"
              element={<LogOut logoutUser={() => logoutUser()} />}
            />
            <Route path="/profile" element={true} />
            {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
            {/* <Route path="/404" element={<NotFound />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </CurrUserContext.Provider>
  );
}

export default App;
