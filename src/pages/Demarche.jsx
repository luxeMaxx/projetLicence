import React from "react";
import { FaComments, FaRegCalendar, FaRegComment } from "react-icons/fa"
import D from "../assets/css/Demarche.module.css"
import Contact from "./partials/contact";
import Bar from "./partials/barHead";


const Demarche = () => {

    return (
        <>
        <Bar titles = "Démarche" />
        <div className = {D.block_d} >
            <div className = {D.block}>
                <h1>
                    Quelle sont les démarche à suivre pour <br /> effectuer une demande ?    
                </h1>
                <p className = {D.info_comment}>
                    <FaRegCalendar />
                    <span>20 Juillet 2023</span>
                    <FaComments />
                    <span>20 Commentaires</span>
                </p>
                <p className = {D.text1}>
                    La procédure de demande du Diplôme, de l'Attestation et du relevé de note
                    du Bac est ouverte à toute personne physique ayant obtenu le Bac dans l'état Béninoise. <br />
                    Pour une demande, certaines étapes sont à suivre.
                </p>
                <h2>
                    • Démarche à suivre
                </h2>
                <div className = {D.article}>
                    <h3>1. Se Connecter </h3>
                    <p>
                        Pour une demande, vous devez avoir un compte et vous connecter.
                    </p>
                    <h3>
                        2. Quels sont les pièces à fournir lors <br /> 
                        &nbsp;&nbsp;&nbsp; d'une demande ?
                    </h3>
                    <p>
                        Les pièces sont fournir en fonction de la pièces maitresse faisant
                        object de votre demande.
                        Toute ces pièces seront scanner prélablement avant de passer au 
                        formulaire de demande. <br />
                        <a href="/pieceafournir">Lire</a> &nbsp;
                        les pièces à fournir pour différent demande.
                    </p>
                    <h3>
                        3. Choisir la pièce maitresse <br />
                        &nbsp;&nbsp;&nbsp; object de demande
                    </h3>
                    <p>
                        Une fois les étapes précédentes passé, cliquer sur Effectuer une demande 
                        au niveau des menus. Vous serez diriger sur la page demande où vous 
                        choisirai la pièces à retiré, puis cliquer sur "Effectuer ma demande". <br />
                    </p>
                    <h3>4. Remplir le formulaire de demande</h3>
                    <p>
                        Une fois cliquer sur "Effectuer ma demande" dans l'étape précédent,
                        vous serez appelé à Remplir le formulaire de demande.
                    </p>
                    <h3>5. Envoyer le formulaire</h3>
                    <p>
                        Une fois le formulaire remplir, assurez-vous que les informations entré sont 
                        correcte puis appuyer sur "Envoyer ma demande".
                        Si rien ne se passe, verifié s'il n'ya pas des notifications d'erreur en bas des
                        champs. Si c'est le cas, renseigné de nouveau ces champs puis valider l'envoie du formulaire à 
                        nouveau.
                    </p>
                    <h3>6. S'Assurer de l'envoie de ma demande</h3>
                    <p>
                        Après la validation du formulaire, vous reçevrez dans votre boite mail,
                        le mail notifiant que la DOB à bien reçu votre demande.
                        Cette mail sera envoyé à l'email renseigné dans le formulaire. <br /><br />
                        <b>
                            NB: l'email renseigné dans le formulaire sera utiliser pour vous faire
                            parvenir votre pièce une fois disponible.
                        </b> <br />
                    </p>
                </div>
            </div>
            <Contact />
        </div>
        </>
    )
}

export default Demarche;
