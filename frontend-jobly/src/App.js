import CurrUserContext from "./components/Authentication/CurrUserContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CompanyList from "./components/Company/CompanyList";
import CompanyDetails from "./components/Company/CompanyDetails";
import JobsList from "./components/Jobs/JobsList";
import SignupForm from "./components/Authentication/SignupForm";
import LoginForm from "./components/Authentication/LoginForm";
import { useGetCurrUser } from "./hooks/useAuth/useGetUser";
import useLocalStorage from "./hooks/useAuth/useLocalStorage";
import UserProf from "./components/Profile/UserProf";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import { useJobApplication } from "./hooks/useApply";
import Loader from "./components/Loader";
// import NotFound from "./components/NotFound";

function App() {
	// authorized {token: token, username: username}
	const [authorized, setAuthorized] = useLocalStorage(undefined);
	const [applyToJob, hasApplied, setHasApplied] = useJobApplication(authorized);
	const [currUser, setCurrUser, isLoading] = useGetCurrUser(
		authorized,
		setHasApplied
	);

	if (!currUser && isLoading) return <Loader />;

	const isAuthed = authorized.token !== null;
	const appContext = {
		authed: isAuthed,
		username: authorized.username,
		userInfo: currUser,
	};

	return (
		<CurrUserContext.Provider value={appContext}>
			<BrowserRouter>
				<NavBar setCurrUser={setCurrUser} setAuthorized={setAuthorized} />
				qerg
				<main>
					<Routes>
						<Route path="/" element={<Home setAuthorized={setAuthorized} />} />
						<Route element={<PrivateRoute />}>
							<Route path="/companies" element={<CompanyList />} />
							<Route
								path="/companies/:handle"
								element={
									<CompanyDetails
										// setDataLoaded={setDataLoaded}
										applyToJob={applyToJob}
										hasApplied={hasApplied}
									/>
								}
							/>
							<Route
								path="/jobs"
								element={
									<JobsList applyToJob={applyToJob} hasApplied={hasApplied} />
								}
							/>
							<Route path="/profile" element={<UserProf />} />
						</Route>
						<Route
							path="/signup"
							element={<SignupForm setAuthorized={setAuthorized} />}
						/>
						<Route
							path="/login"
							element={<LoginForm setAuthorized={setAuthorized} />}
						/>
						{/* <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} /> */}
					</Routes>
				</main>
			</BrowserRouter>
		</CurrUserContext.Provider>
	);
}

export default App;
