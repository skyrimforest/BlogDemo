import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import Login from "./pages/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return <Login></Login>;
}

export default App;
