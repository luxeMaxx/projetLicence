import React from "react";
import Contact from "./partials/contact";
import P from "../assets/css/Piece.module.css"
import H from "../assets/css/Home.module.css"
import Bar from "./partials/barHead";


const Piece = () => {

    return (
        <>
        <Bar titles = "Pièces à fournir" />
        <div className = {P.block_piece}>
            <div className = {P.block_content}>
                <h1>
                    Quelles sont les pièces à fournir pour une <br /> demande ?
                </h1>

                <div id = {P.bc}>

                    <div className= {P.div_section}>
                        <h3>
                            1• Pour la demande du Diplôme
                        </h3>
                        <p>
                            •  L’original de l’attestation ou le certificat d’authenticité du Baccalauréat ; 
                        </p>
                        <p>
                            •  Le reçu bancaire de paiement d'une quittance de 5000, si l'établissement 
                            de l'attestation date d'après 02 ans, et 10000 pour les autres années. 
                            La quittance sera de 15000 s'il s'agit de l'obtention du duplicata.
                        </p>
                    </div>

                    <div className= {P.div_section}>
                        <h3>
                            2• Pour la demande de l'Attestation de réussite
                        </h3>
                        <p>
                            •  L’original du relevé de notes;
                        </p>
                        <p>
                            •  Le reçu bancaire de paiement d'une quittance de 5000 et 1000
                            s'il s'agit du duplicata.
                        </p>
                    </div>

                    <div className= {P.div_section}>
                        <h3>
                            3• Pour la demande du Certificat d'authenticité
                        </h3>
                        <p>
                            •  L’original du relevé de notes ou de l’attestation du Baccalauréat ;
                        </p>
                        <p>
                            •  Le reçu bancaire de paiement d'une quittance de 3000. 
                        </p>
                    </div>

                    <div className= {P.div_section}>
                        <h3>
                            4• Pour la demande du relevé de note
                        </h3>
                        <p>
                            •  L’original du relevé de notes ou de l’attestation du Baccalauréat ;
                        </p>
                        <p>
                            •  Le reçu bancaire de paiement d'une quittance de 3000 pour l'année en cour et 
                            2000 pour les autres année. 
                        </p>
                    </div>

                    <div className= {P.div_section}>
                        <h3>
                            5• Pour la demande du relevé de note
                        </h3>
                        <p>
                            •  L’original du relevé de notes ou de l’attestation du Baccalauréat ;
                        </p>
                        <p>
                            •  Le reçu bancaire de paiement d'une quittance de 3000 pour l'année en cour et 
                            2000 pour les autres année. 
                        </p>
                    </div>
                </div>
                

                <p>
                    Tout les pièces seront scanné pour être concertir en PDF afin d'être 
                    sélectionner dans les formulaire de demande.
                </p>
                <br />
                <p>
                    <b>
                        NB: Les informations personnelle (Nom, Prénom etc...) seront 
                        renseigné dans le formulaire de demande
                    </b>
                </p>
                <br />
                <a href="/effectuer&demande" className = {P.btn_r}>
                    Prêt pour une demande
                </a>
                    <br /><br />
                        <h3 className = {H.title_sous}>
                            Quelle sont les démarche à suivre pour <br /> effectuer une demande ?
                        </h3>
                        <p>
                            Pour une demande... 
                            <a href="/demarche&demande">Lire la suite</a>
                        </p>

                        <h3 className = {H.title_sous}>
                            Comment suivre mon dossier après une demande ?
                        </h3>
                        <p>
                            Pour une demande... 
                            <a href="/suivreMonDossier">Lire la suite</a>
                        </p>
            </div>
            <Contact />
        </div>
        </>
    )
}

export default Piece