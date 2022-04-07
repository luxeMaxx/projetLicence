import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import D from "../assets/css/Demande.module.css";
import Contact from "./partials/contact";
import Bar from "./partials/barHead";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const Demande = () => {


    //function qui permet d'afficher la page du formulaire 
    // del la pièce choisir
    const redirectFormPage = (e) => {
        e.preventDefault()
        var opt1 = document.getElementById ("diplome");
        var opt2 = document.getElementById ("diplome_d");
        var opt3 = document.getElementById ("certificate_r");
        var opt4 = document.getElementById ("certificate_d");
        var opt5 = document.getElementById ("certificate_a");
        var opt6 = document.getElementById ("releve");

        
        if ( opt1.checked ) {
            window.location.href="/demande&diplome"
        } 
        else if ( opt2.checked ) {
            window.location.href="/demande&diplome&duplicata"
        }
        else if ( opt3.checked ) {
            window.location.href="/demande&attestationDeReussite"
        }
        else if ( opt4.checked ) {
            window.location.href="/demande&attestationDeReussiteDuplicata"
        }
        else if ( opt5.checked ) {
            window.location.href="/demande&certificatAuthenticite"
        }
        else if ( opt6.checked ) {
            window.location.href="/demande&releveDeNote"
        }
    }

    


    return (
        <>
        <Bar titles = "Effectuer une demande" />
        <div className = {D.demande_block}>
            <div className = {D.block}>
                <h1>
                    Effectuer une demande
                </h1>
                <form>
                    <label htmlFor = "piece">
                        Sélectionnez la pièce à retiré *
                    </label>
                    <p>
                        <input type="radio" 
                        name="piece" id="diplome" 
                        />
                        <span>Mon Diplôme</span>
                    </p>
                    <p>
                        <input type="radio" 
                        name="piece" id="diplome_d" 
                        />
                        <span>Mon Diplôme ( duplicata )</span>
                    </p>
                    <p>
                        <input type="radio" 
                        name="piece" id="certificate_r" 
                        />
                        <span>Mon Attestation de réussite</span>
                    </p>
                    <p>
                        <input type="radio" 
                        name="piece" id="certificate_d" 
                        />
                        <span>Mon Attestation de réussite ( duplicata )</span>
                    </p>
                    <p>
                        <input type="radio" 
                        name="piece" id="certificate_a" 
                        />
                        <span>Mon Certificat d'authencité</span>
                    </p>
                    <p>
                        <input type="radio" 
                        name="piece" id="releve" 
                        />
                        <span>Mon Relevé de note</span>
                    </p>
                    <p className = {D.p}>
                        Assurez-vous d'avoir bien lire <a href="/pieceafournir">ici</a> ,les conditions du demande 
                        concernant la pièces choisir, puis cliquer sur 
                    </p>
                    <button onClick={ (e) => redirectFormPage(e)}>
                        Faire ma demande
                    </button>
                </form>
            </div>
            <Contact />    
        </div>
        </>
    )
}

export default Demande;