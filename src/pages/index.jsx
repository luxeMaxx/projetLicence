import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../index.css"
import Account from "./authentificate/Account";
import ChangePassword from "./authentificate/changePassword";
import Login from "./authentificate/login";
import Dashboard from "./dashboard";


const Index = () => {

    return (
        <>
            <div className = "container">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element = { <Login /> } />
                        <Route path="/nouveauCompte" element = { <Account /> } />
                        <Route path="/changeDeMotdePasse" element = { <ChangePassword /> } />
                        <Route path="/Dashboard" element = { <Dashboard /> } />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default Index