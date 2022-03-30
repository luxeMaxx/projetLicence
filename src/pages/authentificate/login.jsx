import React, { useState } from "react"
import L from "../../assets/css/Register.module.css"
import H from "../../assets/css/Home.module.css"
import Contact from "../partials/contact";
import Bar from "../partials/barHead";
import { validInputText } from "./register"


const Login = () => {

    const [ val, setVal ] = useState ({
        email : "",
        password : ""
    })

    const handleChange = e => {
        setVal ({
            ...val,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        validInputText ( val.email, "erreur_email", "email" );
        validInputText ( val.password, "erreur_pwd", "pwd" );
    }

    return (
        <>
        <Bar titles = "Se connecter" />
        <div className = {L.login_block}>
            <div className = {L.form}>
                <form autoComplete = "off" >
                    <h2>
                        Se connecter
                    </h2>
                    <hr />
                    <div className = {L.form_div}>
                        <label> Adresse Email *</label>
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
                        <label> Mot de passe *</label>
                        <input type="password" 
                        name="password" id="password" 
                        placeholder = "Votre mot de passe"
                        value = {val.password}
                        onChange = {handleChange}
                        />
                        <span className = {L.error} id = "erreur_pwd">
                        </span>
                    </div>

                    <br /><a className = {L.btn_pass} href="/changerMotDePasse">
                        J'ai oulié mot de passe oublié
                    </a><br /><br />
                    <button onClick = {handleSubmit}>
                        S'inscrire
                    </button> 
                </form>
                <p>
                        Vous n'avez toujour par un compte ?
                        <a href="/creer&compte">
                            Créer un compte
                        </a>
                    </p>
            </div>
            <Contact />
        </div>
    </>
    )
}

export default Login;