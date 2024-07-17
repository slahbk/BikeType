import * as React from "react";
import Background from "./components/Background";
import './App.css'
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-[40%] h-svh flex items-center mx-auto ">
      <Background />
      <Home />
    </div>
  );
}

export default App;
