import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import AppRouter from "./router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
