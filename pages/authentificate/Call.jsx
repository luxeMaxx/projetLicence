import React, { useState } from "react";
import { FaCheck, FaCheckCircle, FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import Axios from "axios";
import C from "../../assets/css/Contact.module.css"
import Contact from "../partials/contact";
import Bar from "../partials/barHead";
import { validInputText } from "./register";
import { useModal } from "react-hooks-use-modal";


const Call = () => {

    const [ Modal, open, close, isopen ] = useModal ();

    const [ val, SetVal ] = useState ({
        message : ""
    })

    const handleChange = e => {
        SetVal ({
            ...val,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        validInputText ( val.message, "erreur_msg", "textarea" );

        if ( validInputText ( val.message, "erreur_msg", "textarea" ) ) {

            console.log ( sessionStorage.getItem ('userId') )
                Axios.post("http://localhost:5000/api/insert_msg", {
                    userId : sessionStorage.getItem ('userId'),
                    message : val.message
                }).then ( (response) => {
                    console.log ( response.data );

                    if ( response.data == "ok" ) {
                        open()
                    }
                })
            }

    }

    return (
        <>
        <Bar titles = "Nous Contacter" />
        <div className = {C.block_contacts}>
        <Modal>
                <div className = {C.msg_comments}>
                     <FaCheckCircle />
                    <p>
                        Votre commentaire a été bien envoyer !!!
                    </p>
                    <a href="/">Retour à l'accueil</a>
                </div>
            </Modal>
            <div className = {C.block}>
                <h1>Envoyer nous un message <FaRegEnvelope/></h1>
                <hr />
                <form>
                   {/*  <label> Votre addresse email *</label>
                    <input type="email"
                    name = "email"
                    id = "email"
                    placeholder=" Entrée votre email"
                    value = {val.email}
                    onChange = {handleChange} 
                    />
                    <span id = "error">efe</span> */}
                    <label> Message :</label>
                    <textarea name="message" id="message" 
                    cols="30" 
                    rows="7"
                    value = {val.message}
                    onChange = {handleChange}
                    >
                    </textarea>
                    <span id = "erreur_msg"></span>
                    <button onClick = {handleSubmit}>
                        Envoyer
                    </button>
                </form>
            </div>
            <Contact/>
        </div>
        </>
    )
}

export default Call