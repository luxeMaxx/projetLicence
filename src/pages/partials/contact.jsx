import React from "react";
import H from "../../assets/css/Home.module.css"


const Contact = () => {
    return (
        <div className={H.contact}>
            <h2> Nous Contacter </h2>
            <hr />
            <h3>
                OFFICE DU BACCALAUREAT
            </h3>
            <p>
                <span className={H.sp}>Adresse:</span>
                Rue 222, Cotonou
            </p>
            <p>
                <span className={H.sp}>Téléphone:</span>
                21 32 02 64
            </p>
            <p>
                <span className={H.sp}>Email:</span>
                <a href="">
                    mgangbala610@gmail.com
                </a>
            </p>

            <img src="/images/maps1.png"
                alt="logo" />
        </div>

    )
}

export default Contact;