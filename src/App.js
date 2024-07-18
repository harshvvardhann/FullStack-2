// he error you're seeing is due to the fact that Routes only accepts Route or React.Fragment as children. Your div wrapping the Route components is causing the issue.
// To resolve this, you need to move the div outside the Routes component. Here’s the corrected code:

import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';
import { useState } from 'react';

function App() {
  const [darkmode, setMode] = useState('dark');

  const toggleMode = () => {
    if (darkmode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-LightMode";
    } else {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      document.title = "TextUtils-DarkMode";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Rajput Harshvardhan Singh" aboutText="About Me" mode={darkmode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            {/* exact is used to match the exact path as sometimes we may be redirected to homme page even after writing home/about/event so use exact so we can directly redirect to home/about and not to /home */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={darkmode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
