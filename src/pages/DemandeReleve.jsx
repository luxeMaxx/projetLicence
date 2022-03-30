import React from "react"
import L from "../assets/css/Register.module.css"
import H from "../assets/css/Home.module.css"
import Contact from "./partials/contact"
import Bar from "./partials/barHead";
import { FaCheckCircle } from "react-icons/fa"
import N from "../assets/css/Notify.module.css"



const ReleveForm = () => {

    return (
        <>
        <Bar titles = "Demande du Relevé de note" />
        <div className = {L.login_block}>
            <div className = {L.form}>
                <form autoComplete = "off" >
                    <h2>
                        Postuler pour la demande du <br /> Relevé de note
                    </h2>
                    <hr />
                    <div className = {L.form_divs}>
                        <div>
                            <label> Prénoms *</label>
                            <input type="text" 
                            name="prenom" id="prenom" 
                            placeholder = "Entré votre prénom..."
                            />
                            <span className = {L.error} id = "erreur_prenom">
                            </span>
                        </div>
                        <div>
                            <label> Nom *</label>
                            <input type="text" 
                            name="nom" id="nom" 
                            placeholder = "Entré votre nom de famille..."
                            />
                            <span className = {L.error} id = "erreur_nom">
                            </span>
                        </div>
                    </div>

                    <div className = {L.form_divs}>
                        <div>
                            <label> Date de naissance *</label>
                            <input type="text" 
                            name="date" id="date" 
                            placeholder = "Votre nom date de naissance..."
                            />
                            <span className = {L.error} id = "erreur_dateN">
                            </span>
                        </div>
                        <div>
                            <label> Lieu de naissance *</label>
                            <input type="text" 
                            name="lieu" id="lieu" 
                            placeholder = "Votre lieu de naissance..."
                            />
                            <span className = {L.error} id = "erreur_lieuN" >
                            </span>
                        </div>
                    </div>

                    <div className = {L.form_div}>
                        <label> Adresse email valide *</label>
                        <input type="email" 
                        name="email" id="email" 
                        placeholder = "Votre email..."
                        />
                        <span className = {L.error} id = "erreur_email">
                        </span>
                    </div>

                    <div className = {L.form_div}>
                        <label> Numéro de téléphone *</label>
                        <input type="text" 
                        name="telephone" id="telephone"
                        placeholder = "Votre numéro de téléphone..." 
                        />
                        <span className = {L.error} id = "erreur_tel">
                        </span>
                    </div>

                    <div className = {L.form_divs}>
                        <div>
                            <label> Année de bac *</label>
                            <select name="annee" id="annee"
                             className = {L.selects}>
                                <option selected disabled>
                                    Sélectionner votre année d'obtention de bac
                                </option>
                                <option value="2019">2019</option>
                            </select>
                            <span className = {L.error} id = "erreur_annee">
                            </span>
                        </div>
                        <div>
                            <label> Série du bac *</label>
                            <select name="serie" id="serie"
                             className = {L.selects}>
                                <option selected disabled>
                                    Sélectionner la série du bac
                                </option>
                            </select>
                            <span className = {L.error} id = "erreur_serie">
                            </span>
                        </div>
                    </div>

                    <div className = {L.form_divs}>
                        <div>
                            <label> Département de composition *</label>
                            <select name="departement" id="departement"
                             className = {L.selects}>
                                <option selected disabled>
                                    Sélectionner votre département de composition
                                </option>
                            </select>
                            <span className = {L.error} id = "erreur_dp">
                            </span>
                        </div>
                        <div>
                            <label> Numéro de table *</label>
                            <input type="text" 
                            name="lieu" id="lieu" 
                            placeholder = "Votre numéro de table"
                            />
                            <span className = {L.error} id = "erreur_num" >
                            </span>
                        </div>
                    </div>

                    <div className = {L.form_divs}>
                        <div>
                            <label> Numéro du jury *</label>
                            <input type="text" 
                            name="numJury" id="numJury" 
                            placeholder = "Numéro du jury"
                            />
                            <span className = {L.error} id = "erreur_numj">
                            </span>
                        </div>
                    </div>

                    <p>
                        Assurez-vous de la conformité des informations, 
                        puis cliquer sur 
                    </p>
                    <button>
                        Valider
                    </button>
                </form>
            </div>
            <Contact />
        </div>
        </>
    )
}

export default ReleveForm;