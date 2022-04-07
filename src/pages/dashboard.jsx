import React, { useEffect, useState } from "react";
import { FaClock, FaClosedCaptioning, FaComments, FaHome, FaHourglass, FaHouseUser, FaRegClock, FaRegUser, FaRegUserCircle, FaSearch, FaStar, FaUser, FaUserAlt, FaUserAltSlash, FaWpforms } from "react-icons/fa"
import D from "../assets/css/Dashboard.module.css"
import DComponent from "./components/demandeComponent";
import Commentaire from "./partials/contentCommentaires";
import ContentDashboard from "./partials/contentDashboard";
import Axios  from "axios";

const Dashboard = () => {

    const [ admin, setAdmin ] = useState({});

    const [ contentIndex, setContentIndex ] = useState(3);

    async function initialComponent () {
        Axios.get ("http://localhost:5000/api/request_admin_connect")
        .then ( (response) => {
            document.getElementById ("admin").innerText = response.data
            console.log (response.data)
            setAdmin (response.data)
        })
        setTimeout(() => {
            setContentIndex (0)
        }, 4000);
    }

    // action qui se declenche initialement sur la page
    useEffect ( () => {
        initialComponent()
    }, [])

    const changeIndex = ( e, index ) => {
        setContentIndex (3)

        setTimeout(() => {
            setContentIndex (index);
        }, 3000);

        var all = document.querySelectorAll ("#li");

        for ( var i = 0; i < all.length; i++ ){
            all[i].classList.add (`${D.no_active}`)
            all[i].classList.remove (`${D.active}`)
        }

        all[index-1].classList.add (`${D.active}`)
    }

    // function qui permet la deconnexion
    const disonnectAdmin = (e) => {
        setContentIndex (3)

        setTimeout(() => {
            Axios.post ("http://localhost:5000/api/disconnect_admin", {
                emails : admin
            }).then ( (response) => {
                console.log (response.data)
                return window.location.href = "/"
            })
        }, 4000);
    }

    // fcuntion qui permet de charger les contenu lors d'un
    // clique sur un menu
    const changeContent = () => {
        
        if ( contentIndex === 0 ) {            
            return (
                <ContentDashboard />
            )
        } 
        else if ( contentIndex === 1 ) {
            return (
                <DComponent />
            )
        }
        else if ( contentIndex === 2 ) {
            return (
                <Commentaire />
            )
        }  
        else if (contentIndex === 3 ) {
            return (
                <div className = {D.anim_div} id = "loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
    }


    return (
        <div className = {D.dashboard}>
            <div className = {D.block1}>
                <h1
                 onClick = { (e) => changeIndex ( e, 0 )} >
                    <FaHome/>
                    Tableau de bord
                </h1>
                <ul>
                    <li
                        id = "li"
                        className = {D.no_active}
                        onClick = { (e) => changeIndex ( e, 1 )}>
                        <FaWpforms />
                        Voir les demandes
                    </li>
                    <li
                        className = {D.no_active}
                        id = "li"
                        onClick = { (e) => changeIndex ( e, 2 )}>
                        <FaComments/>
                        Commentaire
                    </li>
                </ul>

                <div className = {D.block1_foot} >
                    <li>
                        <FaHouseUser/><br />
                        &nbsp;<p id = "admin"></p>&nbsp;
                        <div className = {D.connect}></div>
                    </li>

                    <li onClick={ (e) => disonnectAdmin (e) }>
                        <FaClosedCaptioning/>
                        Deconnexion
                    </li>
                </div>
            </div>
            
            <div className = {D.block2}>
                <div className = {D.block_head}></div>
                <div className = {D.block_content}>
                  
                    { changeContent ()}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;