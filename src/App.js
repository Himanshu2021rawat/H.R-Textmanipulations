import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light"); // wheather dark mode enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has Been Enabled", "Succes");
      document.title = "textUtils-Dark Mode";

      // mesages on the titile bar
      // setInterval(() => {
      //   document.title = "textUtils- is amAzing bitch";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "textUtils-Now Bitches";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has Been Enabled", "Succes");
      document.title = "textUtils-Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="H.R-TextManipulation"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3">

          
          <Routes>
          
           <Route exact path="/about" element={<About />} />

           <Route exact path="/"element={<TextForm
              showAlert={showAlert}
              heading="Enter The Text To Analyze Below:"
              mode={mode}
            />} />
              
            </Routes>

        </div>
      </Router>
    </>
  );
}
export default App;
