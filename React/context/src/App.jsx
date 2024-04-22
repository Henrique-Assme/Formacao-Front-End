
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <h1>Context API</h1>
      <Outlet />
    </>
  );
}

export default App;
