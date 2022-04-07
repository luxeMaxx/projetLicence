import React, { useState } from "react";
import { FaEye, FaKey, FaPassport, FaPlus, FaPlusCircle, FaRegKeyboard, FaUserCircle } from "react-icons/fa"
import L from "../../assets/css/Login.module.css"
import { validInputText } from "../../utilitaire/validInput";
import { changeType } from "../../utilitaire/validInput";
import Axios from "axios"


const Login = () => {

    const [ val, setVal ] = useState ({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setVal ({
            ...val,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //return window.location.href = "/Dashboard"
        Axios.post ("http://localhost:5000/api/verify_admin", {
            emails : val.email,
            motDePasse : val.password
        }).then ( (response) => {
            console.log (response.data);

            if ( response.data == "existe pas") {
                document.getElementById ("error_divs").style.display = "block"
            } else if ( response.data == "existe") {
                document.getElementById ("error_divs").style.display = "none"
            }
        })

    }

    const change = (e, type) => {
        var all = document.querySelectorAll ("#hide");

        if ( type === "email" ) {
            if ( validInputText ( val.email, "email_erreur", "email" ) ) {
                all[0].style.display = "block"
            } else {
                all[0].style.display = "none"
                all[1].style.display = "none"
                all[2].style.display = "none"
            }
        } else if ( type === "password" ) {
            if ( val.password ) {
                document.getElementById ("eye").style.display = "flex"
                if ( validInputText ( val.password, "password_erreur", "pwd" ) ) {
                    all[1].style.display = "block"
                    all[2].style.display = "block"
                } else {
                    all[1].style.display = "none"
                    all[2].style.display = "none"
                }
            } else {
                all[1].style.display = "none"
                all[2].style.display = "none"
                document.getElementById ("eye").style.display = "none"
            }
        }
    }

    return (
        <div className = {L.block_login}>
            <button className = {L.btnAdd}>
                <FaPlusCircle/>
                <a href="/nouveauCompte">
                Nouveau compte
                </a>
            </button>
            <form>
                <h2> Identifiez-vous </h2>
                <div className = {L.error_divs} id = "error_divs">
                    <p>
                        Vos identifiants sont erronée !!
                    </p>
                </div>
                <div className = {L.div_form}>
                    <div>
                        <FaUserCircle/>
                        <input type="email" 
                        name="email" id="email" 
                        placeholder = "Votre adresse email" 
                        value = {val.email}
                        onChange = {handleChange}
                        onKeyUp = { (e) => change( e, "email" ) }
                        />
                    </div>
                    <span id = "email_erreur"></span>
                </div>

                <div className = {L.div_form} id = "hide"  >
                    <div>
                        <FaKey/>
                        <button id = "eye"
                        onClick = { (e) => changeType( e, "password") }>
                            <FaEye/>
                        </button>
                        <input type="password" 
                        name="password" id="password" 
                        placeholder = "Votre mot de passe" 
                        value = {val.password}
                        onChange = {handleChange}
                        onKeyUp = { (e) => change( e, "password" ) }
                        />
                    </div>
                    <span id = "password_erreur"></span>
                </div>
               
                <a href={ "/changeDeMotdePasse?" + val.email} id = "hide" >
                    j'ai oublié mon mot de passe
                </a>
                <button className = {L.btn} id = "hide"
                onClick = {handleSubmit} >
                    S'identifier
                </button>
            </form>
        </div>
    )
}

export default Login