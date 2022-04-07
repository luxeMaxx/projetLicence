import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Register from "./authentificate/register";
import Home from "./home";
import Footer from "./partials/footer";
import Header from "./partials/header";
import H from "../assets/css/Home.module.css"
import Login from "./authentificate/login";
import Demande from "./Demande";
import DiplomeForm from "./DemandeDiplome";
import AttestionForm from "./DemandeAttestation";
import ReleveForm from "./DemandeReleve";
import Success from "./notifyMsg/notifySucces";
import Espace from "./espaceDemande";
import Demarche from "./Demarche";
import Piece from "./Pieces";
import Actualite from "./Actualite";
import Change from "./changePassword";
import CertificatForm from "./demandeCAuth";
import Call from "./authentificate/Call";



const Index = () => {

  const title = [
    {titl: "Postuler pour la demande du"},
    {titl: "Postuler pour la demande du duplicata du"},
    {titl: "Postuler pour la demande de"},
    {titl: "Postuler pour la demande du duplicata"},
    {titl: "Postuler pour la demande du"},
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
                      <Route path = "/demande&diplome" element = { < DiplomeForm titles = { title[0].titl} />} />
                      <Route path = "/demande&diplome&duplicata" element = { < DiplomeForm titles = { title[1].titl} />} />
                      <Route path = "/demande&attestationDeReussite" element = { < AttestionForm titles = { title[2].titl} />} />
                      <Route path = "/demande&attestationDeReussiteDuplicata" element = { < AttestionForm titles = { title[3].titl} />} />
                      <Route path = "/demande&diplome&duplicata" element = { < DiplomeForm />} />
                      <Route path = "/demande&releveDeNote" element = { < ReleveForm />} />
                      <Route path = "/demande&certificatAuthenticite" element = { < CertificatForm titles = { title[4].titl}  />} />
                      <Route path = "/pieceafournir" element = { < Piece />} />
                      <Route path = "/nousContacter" element = { < Call />} />
                  </Routes>
              </BrowserRouter> 
            </section>
          <Footer/>
        </>
    )
}

export default Index