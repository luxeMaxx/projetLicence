import React, { useState, useEffect } from "react"
import Axios from "axios";
import L from "../../assets/css/Register.module.css"
import H from "../../assets/css/Home.module.css"
import Contact from "../partials/contact";
import Bar from "../partials/barHead";
import { validInputText } from "./register"
import { useModal } from "react-hooks-use-modal"
import { FaCheck, FaCheckCircle } from "react-icons/fa";


const Login = () => {

    const [ Modal, open, close, isopen ] = useModal()

    const [ users, setUsers ] = useState([])
    const [ dataUserRequest, setDataUserRequest ] = useState([]);

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
        sessionStorage.clear()
        validInputText ( val.email, "erreur_email", "email" );
        validInputText ( val.password, "erreur_pwd", "pwd" );

        var userIds = 0;

        if (  validInputText ( val.email, "erreur_email", "email" )
            && validInputText ( val.password, "erreur_pwd", "pwd" )) {
                Axios.post ("http://localhost:5000/api/request_info_user", {
                    emails : val.email,
                    passwords : val.password
                }).then ( (response ) => {
                    userIds = response.data[0].userId;

                    if ( response.data == "existe pas" ) {
                        document.getElementById ("msg_erreur").style.display = "block"
                        close()
                    } else  {
                        sessionStorage.setItem ("userId", response.data[0].userId)
                        sessionStorage.setItem ("name", response.data[0].prenomUser)
                        sessionStorage.setItem ("lastname", response.data[0].nomUser)
                        setUsers (response.data);
                        document.getElementById ("msg_erreur").style.display = "none"
                        open()
                    }
                })

            }
            else {
                document.getElementById ("msg_erreur").style.display = "block"
                console.log ("non");
            }
    } 

    
   


    return (
        <>
        <Bar titles = "Se connecter" />
        <div className = {L.login_block}>
            <Modal>
                <div className = {L.animation}>
                    <div className = {L.anim_div2} id = "success">
                        <FaCheckCircle/>    
                        <p>Vous êtes connecter avec succès !!!</p>
                        <a href="/">Retour à l'accueil</a>
                    </div>
                </div>
            </Modal>
            <div className = {L.form}>
                <form autoComplete = "off" >
                    <h2>
                        Se connecter
                    </h2>
                    <hr />
              
                        <p id = "msg_erreur" className = {L.msg}>
                            Vos identifiant sont erronée !!!
                        </p>

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