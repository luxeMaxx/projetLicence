import React from "react";
import Contact from "./partials/contact";
import A from "../assets/css/Actualite.module.css"
import Bar from "./partials/barHead";


const Actualite = () => {

    return (
        <>
            <Bar titles = "Actualités" />
            <div className = {A.block_atuality}>
                <div className = {A.block}>
                    <div className = {A.section_atuality}>
                        <h1>Title</h1>
                        <h3>sous-title</h3>
                        <p>
                            content <br />
                            <button>lire plus...</button>
                        </p>
                    </div>
                </div>
                <Contact />
            </div>
        </>
    )
}

export default Actualite;