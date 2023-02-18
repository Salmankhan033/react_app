import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import { useState } from "react";

function App() {
  const [mode, setkMode] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      setkMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar mode={mode} onToggle={toggleMode} />

      <div className="container my-5">
        <TextForm heading="Enter the Text to analyze" mode={mode} />
      </div>
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
