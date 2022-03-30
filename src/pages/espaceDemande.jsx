import React from "react";
import Contact from "./partials/contact";
import E from "../assets/css/Espace.module.css";
import Bar from "./partials/barHead";
import { FaUser, FaUserAlt } from "react-icons/fa";


const Espace = () => {

    return (
        <>
        <Bar titles = "Espace Utilisateur" />
        <div className = {E.block_espace}>
            <div className = {E.block_child}>
                <h1>
                    Mon espace de demande utilisateur
                </h1>
                <h3>
                    <FaUser/>
                    Andréa
                </h3>
                <div className = {E.liste_d}>
                    <h4>• Diplôme </h4>
                    <p>
                        Demande fait le 20 Juillet 2023 à 10h 30 par vous. <br />
                         <span>Status :</span> En cour de traitement
                    </p>
                </div>
                <button>
                    Historique de demande
                </button>
            </div>
            <Contact/>
        </div>
        </>
    )
}

export default Espace;