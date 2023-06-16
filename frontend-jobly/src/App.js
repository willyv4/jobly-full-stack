import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import CompanyList from "./components/Company/CompanyList";
import CompanyDetails from "./components/Company/CompanyDetails";
import JobsList from "./components/Jobs/JobsList";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/login" element={true} />
          <Route path="/signup" element={true} />
          <Route path="/profile" element={true} />
          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
          {/* <Route path="/404" element={<NotFound />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
