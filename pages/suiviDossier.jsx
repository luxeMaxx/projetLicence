import React from "react";
import { FaComments, FaRegCalendar, FaRegComment } from "react-icons/fa"
import D from "../assets/css/Demarche.module.css"
import H from "../assets/css/Home.module.css"
import Contact from "./partials/contact";
import Bar from "./partials/barHead";


const SuiveDossier = () => {

    return (
        <>
        <Bar titles = "Suivre mon dossier" />
        <div className = {D.block_d} >
            <div className = {D.block}>
                <h1>
                    Comment suivre mon dossier après une <br /> une demande ?    
                </h1>
                <p className = {D.text1}>
                    Après une quelconque demande effectuer, vous pouvez suivre l'avancement 
                    du traitement de votre dossier depuis votre espace demande sur le site.
                    Assurez vous d'être préalablement connecter à votre compte, puis cliquer sur 
                     <a href="/espace&demande"> consulter mes demandes </a>  afin d'ètre diriger 
                     sur votre espace utilisateur 
                    ou seront affichées vos demandes.
                    Si le statut de votre demande, est marquée en attente, cela signifie que votre 
                    dossier n'est pas encore pris en compte. Dans le cas contraire,
                    il sera marquée en cour traitement. Ce qui signifie que votre demande est déjà
                    en cour d'analyse pour d'éventuelle retour.

                </p>
                
                        <h3 className = {H.title_sous}>
                            Quelle sont les démarche à suivre pour <br /> effectuer une demande ?
                        </h3>
                        <p>
                            Pour une demande...&nbsp;
                            <a href="/demarche&demande">Lire la suite</a>
                        </p>

                        <h3 className = {H.title_sous}>
                            Quelles sont les pièces à fournir pour une <br /> demande ?
                        </h3>
                        <p>
                            Tout les pièces...&nbsp;
                            <a href="/pieceafournir">Lire la suite</a>
                        </p>
            </div>
            <Contact />
        </div>
        </>
    )
}

export default SuiveDossier;
