import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import N from "../../assets/css/Notify.module.css"
import Bar from "../partials/barHead";
import Contact from "../partials/contact";


const Success = () => {

    const [ components, setComponents ] = useState(1);

    let getIndex = window.location.search.substring(1);
console.log( getIndex)

      

    const changeComponent = () => {

        //setComponents (getIndex);

        if ( getIndex == 1 ) {
            return (
                
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
              
            )
        } else if (getIndex == 2 ) {
            return (
   
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
            )
        } else if ( getIndex == 3 ) {
            return (
  
                    <div className = {N.block}>
                        <FaCheckCircle/>
                        <p>Mot de passe rénitialiser avec succès.</p>
                        <p>
                        
                        </p>
                        <a href="/seConnecter">
                            Se connecter
                        </a>
                    </div>
                
            )
        }
    }

    return (
        <>
        <Bar />
        <div className = {N.notify_block}>
            
            <div className = {N.block_msg}>
                { changeComponent() }
            </div>
            <Contact />
        </div>
        </>
    )
}

export default Success;