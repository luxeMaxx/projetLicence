import React, { useState } from "react";
import Axios from "axios";
import { FaArrowAltCircleLeft, FaEye, FaKey, FaPassport, FaPlus, FaPlusCircle, FaQuestion, FaRegKeyboard, FaUserCircle } from "react-icons/fa"
import L from "../../assets/css/Login.module.css"
import { validInputText } from "../../utilitaire/validInput";
import { changeType } from "../../utilitaire/validInput";
import { useModal } from "react-hooks-use-modal";


const Account = () => {

    const [ Modal, open, close, isOpen ] = useModal();

    const [ val, setVal ] = useState ({
        prenom : "",
        nom : "",
        email: "",
        password: "",
        passwordC: ""
    })

    const handleChange = e => {
        setVal ({
            ...val,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        var all = document.querySelectorAll ("#hide");

        if ( val.nom && val.prenom && val.email && val.password && val.passwordC ) {
            all[4].style.display = "block"
            if ( val.passwordC == val.passwordC ) {
                Axios.post ("http://localhost:5000/api/insert_admin", {
                    prenom : val.prenom,
                    nom : val.nom,
                    emails : val.email,
                    motDePasse : val.password
                }).then ( (response) => {
                    console.log ( response.data );

                    if ( response.data == "inséré") {
                        close();
                        open();
                        var text = document.getElementById ("content_popup");
                        text.textContent = "Compte créer avec succès !!!. Connectez-vous."
                        setTimeout(() => {
                            window.location.href = "/"
                        }, 1500);
                    } else if ( response.data == "existe") {
                        close();
                        open();
                        var text = document.getElementById ("content_popup");
                        text.textContent = "Cet email est déjà utliser avec un autre compte."
                        setTimeout(() => {
                            val.email = ""
                            close()
                        }, 1500);
                    }
                })
            }
        } else {
            all[4].style.display = "none"
        }
    }

    const showInput = (e, type) => {
        var all = document.querySelectorAll ("#hide");

        if ( type === "prenom" ) {
            if ( validInputText ( val.prenom, "prenom_erreur", "text" ) ) {
                all[0].style.display = "block"
            } else {
                all[0].style.display = "none"
            }
        } else if ( type === "nom" ) {
            if ( validInputText ( val.nom, "nom_erreur", "text" ) ) {
                all[1].style.display = "block"
            } else {
                all[1].style.display = "none"
            }
        } else if ( type === "email" ) {
            if ( validInputText ( val.email, "email_erreur", "email" ) ) {
                all[2].style.display = "block"
            } else {
                all[2].style.display = "none"
            }
        } else if ( type === "password" ) {
            if ( validInputText ( val.password, "password_erreur", "pwd" ) ) {
                all[3].style.display = "block"
            } else {
                all[3].style.display = "none"
            }
        } else if ( type === "passwordC" ) {
          if ( validInputText ( val.passwordC, "passwordC_erreur", "pwd" ) ) {
                if ( val.passwordC == val.password ) {
                    all[4].style.display = "block"
                    document.getElementById ("passwordC_erreur").innerText = ""
                } else {
                
                    document.getElementById ("passwordC_erreur").innerText = "Retaper le même mot de passe";
                    all[4].style.display = "none"
                }
            } else {
                all[4].style.display = "none"
            }
        }
    }

    return (
        <div className={L.block_login}>
             <Modal>
                <div className = {L.popup_content}>
                    <FaQuestion/>
                    <p className = {L.infos_content} id = "content_popup">
                        
                    </p>    
                </div>
            </Modal>
            <button className={L.btnAdds}>
                <FaArrowAltCircleLeft />
                <a href="/">
                retour
                </a>
            </button>
            <form>
                <h2> Nouveau compte </h2>

                <div className = {L.div_form}>
                    <div>
                    <input type="text"
                        name="prenom" id="prenom"
                        placeholder="Votre prénom complet"
                        value = {val.prenom}
                        onChange = {handleChange}
                        onKeyUp = { (e) => showInput ( e, "prenom" ) }
                    />
                    </div>
                    <span id="prenom_erreur"></span>
                </div>

                <div className = {L.div_form} id = "hide">
                    <div>
                    <input type="text"
                        name="nom" id="nom"
                        placeholder="Votre nom complet"
                        value = {val.nom}
                        onChange = {handleChange}
                        onKeyUp = { (e) => showInput ( e, "nom" ) }
                    />
                    </div>
                    <span id="nom_erreur"></span>
                </div>

                <div className = {L.div_form} id = "hide">
                    <div>
                    <input type="email"
                        name="email" id="email"
                        placeholder="Votre adresse email"
                        value = {val.email}
                        onChange = {handleChange}
                        onKeyUp = { (e) => showInput ( e, "email" ) }
                    />
                    </div>
                    <span id="email_erreur"></span>
                </div>
         
                <div className = {L.div_form} id = "hide" >
                    <div>
                        <button id = "eye"
                        onClick = { (e) => changeType( e, "password") }>
                            <FaEye/>
                        </button>
                        <input type="password"
                            name="password" id="password"
                            placeholder="Votre mot de passe"
                            value = {val.password}
                            onChange = {handleChange}
                            onKeyUp = { (e) => showInput ( e, "password" ) }
                        />
                    </div>
                    <span id="password_erreur"></span>
                </div>

                <div className = {L.div_form} id = "hide" >
                    <div>
                        <input type="password"
                            name="passwordC" id="passwordC"
                            placeholder="Votre mot de passe"
                            value = {val.passwordC}
                            onChange = {handleChange}
                            onKeyUp = { (e) => showInput ( e, "passwordC" ) }
                        />
                    </div>
                    <span id="passwordC_erreur"></span>
                </div>
            
                <button className={L.btns} id = "hide" 
                    onClick = {handleSubmit}>
                    Créer mon compte
                </button>
            </form>
        </div>
    )
}

export default Account