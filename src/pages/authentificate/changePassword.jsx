import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaEye, FaKey, FaPassport, FaPlus, FaPlusCircle, FaRegKeyboard, FaUserCircle } from "react-icons/fa"
import L from "../../assets/css/Login.module.css"
import { validInputText } from "../../utilitaire/validInput";
import { changeType } from "../../utilitaire/validInput";
import Axios from "axios"


const ChangePassword = () => {
    
    var email_url = window.location.search.substring(1);

    const [ val, setVal ] = useState ({
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

        if ( val.passwordC == val.password ) {
            Axios.post ("http://localhost:5000/api/reset_password", {
                emails : email_url,
                motDePasse : val.password
            }).then ( (response) => {
                console.log (response.data);
            })
        }
    }

    const showInput = (e, type) => {
        var all = document.querySelectorAll ("#hide");

        var alleye = document.querySelectorAll ("#eye");

        for ( var i = 0; i < alleye.length; i++ ) {
            alleye[i].style.display = "none";
            alleye[i].style.right = "8%";
        }
        
        
        if ( type === "password" ) {
            if ( val.password ) {
                alleye[0].style.display = "flex"
                if ( validInputText ( val.password, "password_erreur", "pwd" ) ) {
                    all[0].style.display = "block"
                } else {
                    all[0].style.display = "none"
                    all[1].style.display = "none"
                }
            } else {
                all[1].style.display = "none"
                alleye[0].style.display = "none"
            }
        }  else if ( type === "passwordC" ) {
            if ( val.passwordC ) {
                alleye[1].style.display = "flex"
                
                if ( val.passwordC == val.password ) {
                    all[1].style.display = "block"
                } else {
                    all[1].style.display = "none"
                }
            } else {
                all[1].style.display = "none"
                alleye[1].style.display = "none"
            }
        }
    }

    return (
        <div className={L.block_login}>
            <button className={L.btnAdds}>
                <FaArrowAltCircleLeft />
                <a href="/">
                retour
                </a>
            </button>
            <form>
                <h2> Réinitialiser mon <br />&nbsp;&nbsp;
                 mot de passe </h2>

                <div className = {L.div_form}>
                    <div>
                    <input type="email"
                        name="email" id="email"
                        placeholder="Votre adresse email"
                        value = {email_url}
                        onChange = {handleChange}
                        onKeyUp = { (e) => showInput ( e, "email" ) }
                    />
                    </div>
                    <span id="email_erreur"></span>
                </div>
         
                <div className = {L.div_form}  >
                    <div>
                        <button id = "eye"
                        onClick = { (e) => changeType( e, "password") }>
                            <FaEye/>
                        </button>
                        <input type="password"
                            name="password" id="password"
                            placeholder="Nouveau mot de passe"
                            value = {val.password}
                            onChange = {handleChange}
                            onKeyUp = { (e) => showInput ( e, "password" ) }
                        />
                    </div>
                    <span id="password_erreur"></span>
                </div>

                <div className = {L.div_form} id = "hide" >
                    <div>
                        <button id = "eye"
                        onClick = { (e) => changeType( e, "passwordC") }>
                            <FaEye/>
                        </button>
                        <input type="password"
                            name="passwordC" id="passwordC"
                            placeholder="Confirmer mon mot de passe"
                            value = {val.passwordC}
                            onChange = {handleChange}
                            onKeyUp = { (e) => showInput ( e, "passwordC" ) }
                        />
                    </div>
                    <span id="passwordC_erreur"></span>
                </div>
            
                <button className={L.btnss} id = "hide"
                onClick={handleSubmit}>
                    Réinitialiser
                </button>
            </form>
        </div>
    )
}

export default ChangePassword