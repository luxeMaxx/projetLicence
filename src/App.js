import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Index from "./pages";
import Account from "./pages/authentificate/Account";
import Login from "./pages/authentificate/login";
import Dashboard from "./pages/dashboard";


function App() {

  return (
    <Index/>
  )
}
export default App;
