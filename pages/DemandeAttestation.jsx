import React, { useState} from "react"
import Axios from "axios"
import L from "../assets/css/Register.module.css"
import H from "../assets/css/Home.module.css"
import Contact from "./partials/contact"
import Bar from "./partials/barHead";
import { validInputText } from "./authentificate/register";



const AttestionForm = ({titles}) => {

    const [ val, setVal ] = useState ({
        prenom : "",
        nom : "",
        date : "",
        lieu : "",
        email : "",
        telephone : "",
        anneBac : null,
        serie : null,
        departement : null,
        numtable : null,
        numJury : "",
        quittance : null
    })

    const handleChange = e => {
        setVal ({
            ...val,
            [e.target.name] : e.target.value
        })
    }

        //function qui se declenche lorsqu'on appui sur le button formulaire
        const handleSubmit = e => {
            e.preventDefault()
            var chemin = document.getElementById ("quittance");
          
            var date = new Date();
            var dateLocale = date.toLocaleString ( 'fr-FR',
            {
                weekday : 'long',
                year : 'numeric',
                month : 'long',
                day : 'numeric',
                hour : 'numeric',
                minute : 'numeric',
                second : 'numeric' 
            })

            validInputText ( val.nom, "erreur_nom", "text" );
            validInputText ( val.prenom, "erreur_prenom", "text" );
            validInputText ( val.date, "erreur_d", "date" );
            validInputText ( val.lieu, "erreur_lieuN", "text" );
            validInputText ( val.email, "erreur_email", "email" );
            validInputText ( val.telephone, "erreur_tel", "tel" );
            validInputText ( val.anneBac, "erreur_annee", "number" );
            validInputText ( val.numJury, "erreur_numj", "nb" );
            validInputText ( val.serie, "erreur_serie", "serie" );
            validInputText ( val.departement, "erreur_dp", "text" );
            validInputText ( val.numtable, "erreur_num", "alpha" );

            if ( validInputText ( val.nom, "erreur_nom", "text" )
                && validInputText ( val.prenom, "erreur_prenom", "text" )
                && validInputText ( val.date, "erreur_d", "date" )
                && validInputText ( val.lieu, "erreur_lieuN", "text" )
                && validInputText ( val.email, "erreur_email", "email" )
                && validInputText ( val.telephone, "erreur_tel", "tel" )
                && validInputText ( val.anneBac, "erreur_annee", "number" )
                && validInputText ( val.serie, "erreur_serie", "serie" )
                && validInputText ( val.departement, "erreur_dp", "text" )
                && validInputText ( val.numtable, "erreur_num", "alpha" )
                && validInputText ( val.numJury, "erreur_numj", "nb" ) ) {

                    Axios.post ("http://localhost:5000/api/insert_data_request", {
                        userId : 1,
                        prenomUser : "Martial",
                        prenom : val.prenom,
                        nom : val.nom,
                        dateNaiss : val.date,
                        lieuNaiss : val.lieu,
                        annee : val.anneBac,
                        serie : val.serie,
                        numTable : val.numtable,
                        numJury : val.numJury,
                        departement : val.departement,
                        recuPaie : chemin.files[0].name,
                        objDemande : "AttestationR",
                        dateDemande : dateLocale
                    }).then ( (response) => {
                        console.log (response.data);
                    })
                }
        }

    return (
        <>
        <Bar titles = "Demande de L'Attestation de réussite" />
        <div className = {L.login_block}>
            <div className = {L.form}>
                <form autoComplete = "off" >
                    <h2>
                       {titles} <br /> 
                        l'Attestation de réussite
                    </h2>
                    <hr />
                    <div className = {L.form_divs}>
                        <div>
                            <label> Prénoms</label>
                            <input type="text" 
                            name="prenom" id="prenom" 
                            placeholder = "Entré votre prénom..."
                            value = {val.prenom}
                            onChange = {handleChange}
                            />
                            <span className = {L.error} id = "erreur_prenom">
                            </span>
                        </div>
                        <div>
                            <label> Nom</label>
                            <input type="text" 
                            name="nom" id="nom" 
                            placeholder = "Entré votre nom de famille..."
                            value = {val.nom}
                            onChange = {handleChange}
                            />
                            <span className = {L.error} id = "erreur_nom">
                            </span>
                        </div>
                    </div>

                    <div className = {L.form_divs}>
                        <div>
                            <label> Date de naissance</label>
                            <input type="text" 
                            name="date" id="date" 
                            placeholder = "Votre nom date de naissance..."
                            value = {val.date}
                            onChange = {handleChange}
                            />
                            <span className = {L.error} id = "erreur_d">
                            </span>
                        </div>
                        <div>
                            <label> Lieu de naissance</label>
                            <input type="text" 
                            name="lieu" id="lieu" 
                            placeholder = "Votre lieu de naissance..."
                            value = {val.lieu}
                            onChange = {handleChange}
                            />
                            <span className = {L.error} id = "erreur_lieuN" >
                            </span>
                        </div>
                    </div>

                    <div className = {L.form_div}>
                        <label> Adresse email valide</label>
                        <input type="email" 
                        name="email" id="email" 
                        placeholder = "Votre email..."
                        value = {val.email}
                        onChange = {handleChange}
                        />
                        <span className = {L.error} id = "erreur_email">
                        </span>
                    </div>

                    <div className = {L.form_div}>
                        <label> Numéro de téléphone</label>
                        <input type="text" 
                        name="telephone" id="telephone"
                        placeholder = "Votre numéro de téléphone..." 
                        value = {val.telephone}
                        onChange = {handleChange}
                        />
                        <span className = {L.error} id = "erreur_tel">
                        </span>
                    </div>

                    <div className = {L.form_divs}>
                        <div>
                            <label> Année de bac *</label>
                            <select name="anneBac" id="anneBac"
                             className = {L.selects}
                             value = {val.anneBac}
                             onChange = {handleChange}
                             >
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
                             className = {L.selects}
                             value = {val.serie}
                             onChange = {handleChange}
                             >
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
                             className = {L.selects}
                             value = {val.departement}
                             onChange = {handleChange}
                             >
                                <option selected disabled>
                                    Sélectionner votre département de composition
                                </option>
                            </select>
                            <span className = {L.error} id = "erreur_dp">
                            </span>
                        </div>
                        <div>
                            <label> Numéro de table </label>
                            <input type="text" 
                            name="numtable" id="numtable" 
                            placeholder = "Votre numéro de table"
                            value = {val.numtable}
                            onChange = {handleChange}
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
                            placeholder = "Numéro de jury"
                            value = {val.numJury}
                            onChange = {handleChange}
                            />
                            <span className = {L.error} id = "erreur_numj" >
                            </span>
                        </div>
                        <div>
                            <label> Joindre le reçu bancaire *</label>
                            <input type="file" 
                            name="quittance" 
                            accept=".png"
                            placeholder = "Votre reçu de paiement bancaire..."
                            value = {val.quittance}
                            onChange = {handleChange}
                            />
                            <span className = {L.error} id = "quittance">
                            </span>
                        </div>
                    </div>

                    <p>
                        Assurez-vous de la conformité des informations, 
                        puis cliquer sur 
                    </p>
                    <button onClick = {handleSubmit}>
                        Envoyer
                    </button>
                </form>
            </div>
            <Contact />
        </div>
        </>
    )
}

export default AttestionForm;