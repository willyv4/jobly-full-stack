import CurrUserContext from "./components/Authentication/CurrUserContext";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CompanyList from "./components/Company/CompanyList";
import CompanyDetails from "./components/Company/CompanyDetails";
import JobsList from "./components/Jobs/JobsList";
import SignupForm from "./components/Authentication/SignupForm";
import LoginForm from "./components/Authentication/LoginForm";
import { useGetCurrUser } from "./hooks/useAuth/useGetUser";
import useLocalStorage from "./hooks/useAuth/useLocalStorage";
import LogOut from "./components/Authentication/LogOut";
import UserProf from "./components/Profile/UserProf";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import { useJobApplication } from "./hooks/useApply";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";

function App() {
  // authorized {token: token, username: username}
  const [authorized, setAuthorized] = useLocalStorage(undefined);
  const [applyToJob, hasApplied, setHasApplied] = useJobApplication(authorized);
  const [currUser, setCurrUser, isLoading] = useGetCurrUser(
    authorized,
    setHasApplied
  );

  const isAuthed = authorized.token !== null;

  const appContext = {
    authed: isAuthed,
    username: authorized.username,
    userInfo: currUser,
  };

  if (!currUser && isLoading) {
    return <Loader />;
  }

  return (
    <CurrUserContext.Provider value={appContext}>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/companies" element={<CompanyList />} />
              <Route
                path="/companies/:handle"
                element={
                  currUser && (
                    <CompanyDetails
                      applyToJob={applyToJob}
                      hasApplied={hasApplied}
                    />
                  )
                }
              />
              <Route
                path="/jobs"
                element={
                  <JobsList applyToJob={applyToJob} hasApplied={hasApplied} />
                }
              />
              <Route
                path="/profile"
                element={<UserProf currUser={currUser} />}
              />
            </Route>
            <Route
              path="/signup"
              element={<SignupForm setAuthorized={setAuthorized} />}
            />
            <Route
              path="/login"
              element={<LoginForm setAuthorized={setAuthorized} />}
            />
            <Route
              path="/logout"
              element={
                <LogOut
                  setAuthorized={setAuthorized}
                  setCurrUser={setCurrUser}
                />
              }
            />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CurrUserContext.Provider>
  );
}

export default App;
