import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import N from "../../assets/css/Notify.module.css"
import Bar from "../partials/barHead";
import Contact from "../partials/contact";


const Success = () => {

    return (
        <>
        <Bar />
        <div className = {N.notify_block}>
            <div className = {N.block_msg}>
                <div className = {N.block}>
                    <FaCheckCircle/>
                    <p>Demande envoyé avec succès !!!</p>
                    <p>
                        Vérifié votre boite email pour verifié 
                        le message de reception de la demande par la DOB.
                    </p>
                    <a href="">
                        Voir mes demandes
                    </a>
                </div>
            </div> 

{/*             <div className = {N.block_msg}>
                <div className = {N.block} id = {N.echec}>
                    <FaTimesCircle/>
                    <p>Echec de l'envoie !!</p>
                    <p>
                    Ceci est peut-ètre du a une mauvaise connexion
                    . Veuillez refaire la demande.
                    </p>
                    <a href="">
                        Revenir au formulaire
                    </a>
                </div>
            </div> */}

            <Contact />
        </div>
        </>
    )
}

export default Success;