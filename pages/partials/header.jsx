import React from "react";
import H from "../../assets/css/Header.module.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { FaEnvelope, FaFacebook, FaFacebookF, FaFacebookSquare, FaHamburger, FaHome, FaPhone, FaPhoneAlt, FaPrint, FaRegEnvelope, FaRegPaperPlane, FaRegStar, FaRegUserCircle, FaSend, FaStar, FaStarHalfAlt, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import Bar from "./barHead";

// function qui permet de controller si l'utilisater 
// a son session ouvert
const controlSessionUser = () => {
    if ( sessionStorage.getItem ("name") == null ) {
        window.location.href = "/seConnecter"
    } else {
        window.location.href = "/espace&demande"
    }
}

const controlSessionUser2 = () => {
    if ( sessionStorage.getItem ("name") == null ) {
        window.location.href = "/seConnecter"
    } else {
        window.location.href = "/effectuer&demande"
    }
}

const Header = () => {


    // function qui permet d'afficher et de fermer le formulaire de la newsletter
    function showNewsletterForm(e) {
        var form = document.getElementById("form-news");
        var li = document.getElementById("li_form");

        if (form.style.display == "none") {
            form.style.display = "block";
            li.style.background = "rgb(221, 221, 221)";
            li.style.color = "black";
        } else if (form.style.display = "block") {
            form.style.display = "none";
            li.style.background = "none";
            li.style.color = "white";
        }
    }

    function contactPage(e) {
        if ( sessionStorage.getItem ('userId') != null
            || sessionStorage.getItem ('userId') != '0' ) {
                window.location.href = "/nousContacter"
            } else {
                window.location.href = "/seConnecter"
            }
      
    }

    function comptePage (e) {
        //sessionStorage.clear();
        return window.location.href = "/seConnecter"
    }

    return (
        <header>
            <div className={H.div_head}>
                <ul>
                    <li id = "">
                        <FaPhoneAlt/>
                        <span  onClick = {(e) => contactPage(e) }> 
                            Nous Contacter
                        </span>
                    </li>
                    <li>
                        <FaRegUserCircle />
                        <a  onClick = { (e) => { comptePage (e) }}>
                            Mon compte
                        </a>
                    </li>
                    <li>
                        <FaRegStar />
                        <a onClick = {controlSessionUser}>
                            Mes demandes
                        </a>
                    </li>
                </ul>
            </div>

            <div className={H.div_logo}>
                <div className={H.first_div}>
                    <a href="/" className={H.logoLink} >
                        <img className={H.logo} src="/images/ecuri.png" alt="logo" />
                    </a>

                    <div className={H.textLogo}>
                        <p>
                            MINISTERE <br /> DE L'ENSEIGNEMENT SUPERIEUR
                            ET DE LA RECHERCHE SCIENTIFIQUE
                        </p>
                        <div className={H.trait}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p>
                            REPUBLIQUE DU BENIN
                        </p>
                    </div>
                </div>

                <div className={H.names}>
                    <span>OFFICE</span>
                    <span>DU</span>
                    <span>BACCALAUREAT</span>
                </div>

                <div className={H.logoDob}>
                    <img src="/images/logoDob.png" alt="logo" />
                </div>
            </div>

            <nav className={H.navbar}>
                <ul>
                    <li className={H.nav_link}>
                        <FaHome />&nbsp;
                        <a href="/">
                            Accueil
                        </a>
                    </li>

                    <li className={H.nav_link}>
                        <a href="#autres">
                            Bon à savoir
                        </a>
                    </li>

                    <li className={H.nav_link}>
                        <a href="/demarche&demande">
                            Démarches
                        </a>
                    </li>

                    <li className={H.nav_link}>
                        <a onClick = {controlSessionUser2}>
                            Effectuer une demande
                        </a>
                    </li>
                </ul>
                <div className={H.searchBar}>
                  {/*   <form autoComplete="off">
                        <input type="text"
                            name="texte" id=" texte"
                        />
                        <button className="bi-search"></button>
                    </form> */}

                    <li>
                        <FaStarHalfAlt />&nbsp;
                        <a onClick = {controlSessionUser}>
                            Consulter mes demandes
                        </a>
                    </li>
                </div>
            </nav>
        </header>
    )
}

export default Header