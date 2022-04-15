import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Register from "./authentificate/register";
import Home from "./home";
import Footer from "./partials/footer";
import Header from "./partials/header";
import H from "../assets/css/Home.module.css"
import Login from "./authentificate/login";
import Demande from "./Demande";
import DiplomeForm from "./DemandeForms";
import Success from "./notifyMsg/notifySucces";
import Espace from "./espaceDemande";
import Demarche from "./Demarche";
import Piece from "./Pieces";
import Actualite from "./Actualite";
import Change from "./changePassword";
import Call from "./authentificate/Call";
import SuiveDossier from "./suiviDossier";



const Index = () => {

  const title = [
    {titl: "du diplome", join_p : "Attestation  de réussite *"},
    {titl: "du duplicata du diplome" },
    {titl: "de l'Attestation de réussite", join_p : "Relevé de note *"},
    {titl: "du duplicata de l'Attestation de réussite"},
    {titl: "du Certificat d'authenticité", join_p : "Attestation de réussite / relevé de note *"},
    {titl: "du Relevé de note"},
  ]

    return (
        <>
          <Header />
            <section className = {H.section_home}>
             <BrowserRouter>
                  <Routes>
                      <Route exact path = "/" element = { < Home />} />
                      <Route path = "/seConnecter" element = { < Login />} />
                      <Route path = "/notifySuccess" element = { < Success />} />
                      <Route path = "/changerMotDePasse" element = { < Change /> } />
                      <Route path = "/Actualite" element = { < Actualite />} />
                      <Route path = "/creer&compte" element = { < Register />} />
                      <Route path = "/espace&demande" element = { < Espace />} />
                      <Route path = "/demarche&demande" element = { < Demarche  />} />
                      <Route path = "/effectuer&demande" element = { < Demande />} />
                      <Route path = "/demande&diplome" element = { < DiplomeForm titles = { title[0].titl} label = { title[0].join_p} />} />
                      <Route path = "/demande&diplome&duplicata" element = { < DiplomeForm titles = { title[1].titl} label = { title[0].join_p} />} />
                      <Route path = "/demande&attestationDeReussite" element = { < DiplomeForm titles = { title[2].titl} label = { title[2].join_p} />} />
                      <Route path = "/demande&attestationDeReussiteDuplicata" element = { < DiplomeForm titles = { title[3].titl} label = { title[2].join_p} />} />
                      <Route path = "/demande&certificatAuthenticite" element = { < DiplomeForm titles = { title[4].titl} label = { title[4].join_p} />} />
                      <Route path = "/demande&releveDeNote" element = { < DiplomeForm titles = { title[5].titl} />} />
                      <Route path = "/pieceafournir" element = { < Piece />} />
                      <Route path = "/suivreMonDossier" element = { < SuiveDossier />} />
                      <Route path = "/nousContacter" element = { < Call />} />
                  </Routes>
              </BrowserRouter> 
            </section>
          <Footer/>
        </>
    )
}

export default Index