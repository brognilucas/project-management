import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import AppRouter from "./router";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
