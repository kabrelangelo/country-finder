import { useContext } from "react";
import Countries from "./components/Countries";
import { CountryContext } from "./context/CountryContext";
import DetailsCountries from "./components/DetailsCountries";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";



function App() {
  const {loading}=useContext(CountryContext)
  if (loading) {
    return (<div>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
    </div>)
  }
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/:slug" element={<DetailsCountries />} />
    </Routes>
    </>
  );
}

export default App;
