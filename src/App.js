import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`${isDarkMode ? "dark" : ""} App`}>
      <Container toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
