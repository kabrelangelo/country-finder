import { useContext } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { CountryContext } from "./context/CountryContext";


function App() {
  const {loading, countries}=useContext(CountryContext)
  if (loading) {
    return <div>Loading...</div>
  }
  console.log( countries[0]);
  
  
  return (
    <>
        <Header/>
        <Countries/>
    </>
  );
}

export default App;
