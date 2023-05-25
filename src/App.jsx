import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import googleLogo from "./assets/googlelogo.png";
import "./App.css";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div>
      <img src={"./images/googlelogo.png"} alt="google logo" className="logo" />
      <SearchBar />
    </div>
  );
}

export default App;
