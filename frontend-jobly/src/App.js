import { useState } from "react";
import CurrUserContext from "./components/Authentication/CurrUserContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CompanyList from "./components/Company/CompanyList";
import CompanyDetails from "./components/Company/CompanyDetails";
import JobsList from "./components/Jobs/JobsList";
import SignupForm from "./components/Authentication/SignupForm";
import LoginForm from "./components/Authentication/LoginForm";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [token, setToken] = useState(TOKEN_STORAGE_ID);

  console.log(token, "TOKEN");

  // const storedData = localStorage.getItem("CURR_USER");
  // const CURR_USER = JSON.parse(storedData);
  // JoblyApi.token = CURR_USER?.token;
  // const userInfo = useGetUserInfo();

  // const profProps = useProfileForm(userInfo, setUpdate);
  // const userUpdate = useProfUpdate(profProps, update, setUpdate, CURR_USER);

  return (
    // <CurrUserContext.Provider value={CURR_USER}>
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/signup" element={<SignupForm setToken={setToken} />} />
          <Route path="/login" element={<LoginForm setToken={setToken} />} />
          {/* <Route
              path="/logout"
              element={<LogOut logoutUser={() => logoutUser()} />}
            />
            <Route
              path="/profile"
              element={
                <UserProf ProfFormInputs={ProfFormInputs} {...profProps} />
              }
            /> */}
          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
          {/* <Route path="/404" element={<NotFound />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
    // </CurrUserContext.Provider>
  );
}

export default App;
