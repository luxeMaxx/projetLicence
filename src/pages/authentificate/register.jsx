import React, { useState } from "react"
import L from "../../assets/css/Register.module.css"
import "../../assets/css/Register.module.css"
import H from "../../assets/css/Home.module.css"
import Contact from "../partials/contact";
import Bar from "../partials/barHead";
import Axios from "axios";


  //function qui permet d'animer le message d'erreur
  function animeSpan ( span ) {
    var error = document.getElementById ( span );
    error.style.animation = "dongle 2s";

}

 //function qui permet de vérifier la validité des champs
 export function validInputText ( value, id_error, type) {
    var regex = /^[a-zA-ZéèêïÏ]*$/,
        regexTel = /[+]+[0-9]*$/,
        regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/,
        regexAlphaN = /^[a-zA-Z0-9]*$/,
        regexAlphaN = /[0-9]{2}$/,
        regexAn = /^[0-9]*$/,
        regexC =  /^[A-Z]*$/,
        regexFile = /^[a-zA-Z0-9]+\.(pdf)*$/,
        error = document.getElementById (id_error);

    if ( type === "text" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
           // animeSpan (id_error);
            return false;
        } 
        else if ( value.length < 3 ) {
            error.textContent = "Ce champs est trop court...";
            //animeSpan (id_error);
            return false;
        } 
        else if ( regex.test (value) == false ) {
            error.textContent = "format invalide...";
           // animeSpan (id_error);
            return false;
        }
        else {
            error.textContent = "";
            return true;
        } 
    }
    else if ( type === "tel" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            //animeSpan (id_error);
            return false;
        } 
        else if ( value.length < 9 ) {
            error.textContent = "le numéro est trop court...";
           // animeSpan (id_error);
            return false;
        } 
        else if ( regexTel.test (value) == false ) {
            error.textContent = "format du numéro invalide...";
            //animeSpan (id_error);
            return false;
        }
        else {
            error.textContent = "";
            return true;
        } 
    }
    else if ( type === "email" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
           // animeSpan (id_error);
            return false;
        } 
        else if ( regexEmail.test (value) == false ) {
            error.textContent = "format de l'email est invalide...";
           // animeSpan (id_error);
            return false;
        }
        else {
            error.textContent = "";
            return true;
        } 
    }  
    else if ( type === "date" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            //animeSpan (id_error)
            return false;
        } 
        
        else {
            error.textContent = "";
            return true;
        } 
    } 
    else if ( type === "pwd" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            //animeSpan (id_error)
            return false;
        } 
        else if ( value.length < 6 ) {
            error.textContent = "mot de passe trop court... Au moins 6 caratères alphanumérique";
            //animeSpan (id_error)
            return false;
        }
        else {
            error.textContent = ""
            return true;
        } 
    }    
    else if ( type === "alpha" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            //animeSpan (id_error)
            return false;
        } 
        else if ( value.length < 3 ) {
            error.textContent = "numéro trop court...";
            //animeSpan (id_error)
            return false;
        }
        else if ( regexAlphaN.test (value) == false ) {
            error.textContent = "le numéro de table doit ètre alphanumérique...";
            return false;
        }
        else {
            error.textContent = ""
            return true;
        }  
        

    }

    else if ( type === "number" ) {
        if ( !value ) {
            error.textContent = "Sélectionné un année..";
            //animeSpan (id_error)
            return false;
        } else {
            error.textContent = "";
            return true
        }
    }

    else if ( type === "serie") {
        if ( !value ) {
            error.textContent = "Sélectionné une série..";
            //animeSpan (id_error)
            return false;
        } else {
            error.textContent = "";
            return true
        }
    }

    else if ( type === "file" ) {
        if ( value.files[0].length === "" ) {
            error.textContent = "Veuillez sélectionnez un fichier...";
            return false;
        }
        else {
            error.textContent  = "";
            return true
        }
    }
    else if ( type === "nb") {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            return false;
        }
        else if ( regexAn.test (value) == false) {
            error.textContent = "Format invalide..."
            return false;
        }
        else {
            error.textContent  = "";
            return true
        }
    }

}

const Register = () => {

    const [ val, setVal ] = useState({
        prenom : "",
        nom : "",
        date : "",
        lieu : "",
        telephone : "",
        pays : null,
        email : "",
        password : "",
        passwordC : ""
    })


    //function qui permet de recupéré les valeur entré dans les champs
    const handleChange = e => {
        setVal ({
            ...val,
            [e.target.name] : e.target.value
        })
    }


    //function qui se declenche lorsqu'on appui sur le button formulaire
    const handleSubmit = e => {
        e.preventDefault()

        validInputText ( val.nom, "erreur_nom", "text" );
        validInputText ( val.prenom, "erreur_prenom", "text" );
        validInputText ( val.pays, "erreur_pays", "text" );
        validInputText ( val.date, "erreur_dateN", "date" );
        validInputText ( val.lieu, "erreur_lieuN", "text" );
        validInputText ( val.email, "erreur_email", "email" );
        validInputText ( val.telephone, "erreur_tel", "tel" );
        validInputText ( val.password, "erreur_pwd", "pwd" );
        validInputText ( val.passwordC, "erreur_pwdC", "pwd" );

        if ( validInputText ( val.nom, "erreur_nom", "text" ) == true 
            && validInputText ( val.prenom, "erreur_prenom", "text" ) ==true
            && validInputText ( val.pays, "erreur_pays", "text" ) == true 
            && validInputText ( val.date, "erreur_dateN", "date" ) == true
            && validInputText ( val.lieu, "erreur_lieuN", "text" ) == true 
            && validInputText ( val.email, "erreur_email", "email" ) == true 
            && validInputText ( val.telephone, "erreur_tel", "tel" ) == true 
            && validInputText ( val.password, "erreur_pwd", "pwd" ) == true 
            && validInputText ( val.passwordC, "erreur_pwdC", "pwd" ) == true ) {

                if ( val.password === val.passwordC ) {
                    Axios.post ("http://localhost:5000/api/insert_user_register", {
                        prenom : val.prenom,
                        nom : val.nom,
                        dateNaiss : val.date,
                        lieuNaiss : val.lieu,
                        paysA : val.pays,
                        email : val.email,
                        telephone : val.telephone,
                        motDePasse : val.password
                    }).then ( (response) => {
                        console.log ( response.data );
                    })
                } else {
                    document.getElementById ("erreur_pwdC").innerText = "Retaper le même mot de passe...";
                }
            }
    }


   

    return (
        <>
        <Bar titles= "Créer un compte" />
        <div className = {L.login_block}>
            <div className = {L.form}>
                <form autoComplete = "off" >
                    <h2>
                        Créer un compte
                    </h2>
                    <hr />
                    <div className = {L.form_divs}>
                        <div>
                            <label> Prénoms *</label>
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
                            <label> Nom *</label>
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
                            <label> Date de naissance *</label>
                            <input type="date" 
                            name="date" id="date" 
                            className = {L.date} 
                            value = {val.date}
                            onChange = {handleChange}
                            />
                            <span className = {L.error} id = "erreur_dateN">
                            </span>
                        </div>
                        <div>
                            <label> Lieu de naissance *</label>
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
                        <label> Numéro de téléphone *</label>
                        <input type="text" 
                        name="telephone" id="telephone"
                        placeholder = "Votre numéro de téléphone..." 
                        value = {val.telephone}
                        onChange = {handleChange}
                        />
                        <span className = {L.error} id = "erreur_tel">
                        </span>
                    </div>

                    <div className = {L.form_div}>
                            <label> Pays actuel *</label>
                            <select name="pays" id="pays"
                            className = {L.select}
                            value = {val.pays}
                            onChange = {handleChange}
                            >
                                <option disabled selected > Votre pays actuel...</option>
                                <option value="Bénin">Bénin</option>
                            </select>
                            <span className = {L.error} id = "erreur_pays">
                            </span>
                    </div>

                    <div className = {L.form_div}>
                        <label> Adresse email valide *</label>
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
                        <label> Mot de passe *</label>
                        <input type="password" 
                        name="password" id="password" 
                        placeholder = "Créer un mot de passe..."
                        value = {val.password}
                        onChange = {handleChange}
                         />
                        <span className = {L.error} id = "erreur_pwd">
                        </span>
                    </div>

                    <div className = {L.form_div}>
                        <label> Confirmer le mot de passe *</label>
                        <input type="password" 
                        name="passwordC" id="passwordC" 
                        placeholder = "Retaper le mot de passe"
                        value = {val.passwordC}
                        onChange = {handleChange}
                        />
                        <span className = {L.error} id = "erreur_pwdC">
                        </span>
                    </div>

                    <p>
                        Vérifier si vous avez bien entré vos 
                        informations personnelle, puis cliquer sur 
                    </p>
                    <button onClick = {handleSubmit}>
                        S'inscrire
                    </button>
                </form>
            </div>
            <Contact />
        </div>
    </>
    )
}

export default Register;