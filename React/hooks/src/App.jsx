import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HookUseState from "./components/HookUseState";
import HookUseReducer from "./components/HookUseReducer";
import HookUseEffect from "./components/HookUseEffect";
import HookUseRef from "./components/HookUseRef";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hooks</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <HookUseRef />
    </>
  );
}

export default App;
