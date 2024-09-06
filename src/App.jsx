import { useContext } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { CountryContext } from "./context/CountryContext";
import { Route, Routes } from "react-router-dom";
import DetailsCountries from "./components/DetailsCountries";


function App() {
  const {loading, countries}=useContext(CountryContext)
  if (loading) {
    return <div>Loading...</div>
  }

  
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/:slug" element={<DetailsCountries />} />
    </Routes>
    </>
  );
}

export default App;
