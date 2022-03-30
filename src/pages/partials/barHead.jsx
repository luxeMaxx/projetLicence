import React from "react";
import H from "../../assets/css/Header.module.css"
import { FaEnvelope, FaFacebook, FaFacebookF, FaFacebookSquare, FaHamburger, FaHome, FaPrint, FaRegEnvelope, FaRegPaperPlane, FaRegStar, FaRegUserCircle, FaSend, FaStar, FaStarHalfAlt, FaTelegramPlane, FaTwitter } from "react-icons/fa"


const Bar = ({titles}) => {

    //funciton qui permet d'imprimer une page
    const printPage = (e) => {
        window.print()
    }

    return (
        <div className = {H.div_foot}>
        <div>
            <FaHome/>&nbsp;
            <span> {titles} </span>
        </div>

        <div>
            <li id = {H.links}>
                <a onClick={ (e) => printPage(e)}>
                    <FaPrint/>
                </a>
                <span className = {H.span1}>imprimer le contenu</span>
            </li>

            <li id = {H.links}>
                <a href="">
                    <FaFacebookSquare/>
                </a>
                <span className = {H.span2}>partager sur facebook</span>
            </li>

            <li id = {H.links}>
                <a href="">
                    <FaTwitter/>
                </a>
                <span className = {H.span3}>partager sur twitter</span>
            </li>
        </div>
    </div>
    )
}

export default Bar;
