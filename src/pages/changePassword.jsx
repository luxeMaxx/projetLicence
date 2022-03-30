import React, { useState } from "react";
import Contact from "./partials/contact";
import L from "../assets/css/Register.module.css"
import Bar from "./partials/barHead";
import { validInputText } from "./authentificate/register"


const Change = () => {

    const [ val, setVal ] = useState ({
        email : "",
        password : "",
        passwordC : ""
    })

    const handleChange = e => {
        setVal ({
            ...val,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        validInputText (val.email, "erreur_email", "email");
        validInputText (val.password, "erreur_pwd", "pwd");
        validInputText (val.passwordC, "erreur_pwdC", "pwd");
    }


    return (
        <>
        <Bar titles = "Changer mon mot de passe" />
        <div className = {L.login_block}>
            <div className = {L.form}>
                <form autoComplete = "off" >
                    <h2>
                        Changer mon mot de passe
                    </h2>
                    <hr />
                    <div className = {L.form_div}>
                        <label> Votre adresse email *</label>
                        <input type="email" 
                        name="email" id="email" 
                        placeholder = "Votre adresse email..."
                        value = {val.email}
                        onChange = {handleChange}
                        />
                        <span className = {L.error} id = "erreur_email">
                        </span>
                    </div>
                    <div className = {L.form_div}>
                        <label> Nouveau mot de passe *</label>
                        <input type="password" 
                        name="password" id="password" 
                        placeholder = "Votre nouveau mot de passe..."
                        value = {val.password}
                        onChange = {handleChange}
                        />
                        <span className = {L.error} id = "erreur_pwd">
                        </span>
                    </div>

                    <div className = {L.form_div}>
                        <label> Confimer le nouveau mot de passe *</label>
                        <input type="password" 
                        name="passwordC" id="passwordC" 
                        placeholder = "Votre mot de passe"
                        value = {val.passwordC}
                        onChange = {handleChange}
                        />
                        <span className = {L.error} id = "erreur_pwdC">
                        </span>
                    </div>

                    <button onClick = {handleSubmit}>
                        Validé
                    </button> 
                </form>
            </div>
            <Contact />
        </div>
    </>
    )
}

export default Change;