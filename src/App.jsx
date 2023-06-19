import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CRT from "./components/CRT/CRT";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar title="About" subtitle="Me" />
      <CRT />
      <div className="test-deleteLater"></div>
    </>
  );
}

export default App;
