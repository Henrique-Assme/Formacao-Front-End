import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {

  return (
    <>
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
