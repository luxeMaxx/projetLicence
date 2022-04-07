import React from "react";
import {} from "react-icons/fa";
import Axios from "axios";
import C from "../../assets/css/Contact.module.css"
import Contact from "../partials/contact";


const Call = () => {

    return (
        <div className = {C.block_contacts}>
            <div className = {C.block}>
                <h1>Nous Contacter</h1>
            </div>
            <Contact/>
        </div>
    )
}

export default Call