import { useContext } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { CountryContext } from "./context/CountryContext";
import { Route, Routes } from "react-router-dom";
import BorderCountries from "./components/BorderCountries";


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
      <Route path="/:slug" element={<BorderCountries />} />
    </Routes>
    </>
  );
}

export default App;
