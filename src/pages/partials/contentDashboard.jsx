import React, { useEffect, useState } from "react";
import D from "../../assets/css/Dashboard.module.css"
import { FaClosedCaptioning, FaComment, FaComments, FaHome, FaHourglass, FaHouseUser, FaRegUser, FaRegUserCircle, FaSearch, FaStar, FaUser, FaUserAlt, FaUserAltSlash, FaUserAstronaut, FaWpforms } from "react-icons/fa"
import Axios from "axios"


const ContentDashboard = () => {
    
    const [ data, setData ] = useState ([]);
    const [ dataUser, setDataUser ] = useState ([]);
    
    async function funct () {

        // recuperation des informations des demande depuis le serveur
            Axios.get ("http://localhost:5000/api/retrieve_request")
            .then ( (response) => {
                setData (response.data)
            })

        // recuperation des informations sur le nombre des utilisateur depuis le serveur
        Axios.get ("http://localhost:5000/api/request_nbuser")
        .then ( (response) => {
            setDataUser (response.data)
        })

        // recuperation des informations sur le nombre des commentaires depuis le serveur
        Axios.get ("http://localhost:5000/api/request_commentss")
        .then ( (response) => {
           document.getElementById ("nbComments").innerText = response.data[0].nbComments;
        })
    }
    useEffect ( () => {
        funct();
    }, [])

    //obtention du nombre de demande au total
    var nb = 0;
    var nbDiplome = 0;
    var nbAttestation = 0;
    var nbCertificat = 0;
    var nbReleve = 0;
    
    var nbT = 0;
    var nbDiplomeT = 0;
    var nbAttestationT = 0;
    var nbCertificatT = 0;
    var nbReleveT = 0;

    var userConnect = 0;
    var userDisconnect = 0;

    const user = [ ...dataUser ]


    if ( dataUser.length != 0 ) {
    userConnect = dataUser[0].nbUser;
    userDisconnect = dataUser[1].nbUser;
    }

    if ( data.length != 0) {
        for ( var i = 0; i < data.length; i++ ){
            if ( data[i].statut == "en attente") {
                nb += data[i].nbDemande
            }
            if ( data[i].objectdemande == "diplome" && 
                data[i].statut == "en attente" ) {
                nbDiplome += data[i].nbDemande 
            } 
            if ( data[i].objectdemande == "duplicataDiplome" &&
                data[i].statut == "en attente" ) {
                nbDiplome += data[i].nbDemande 
            } 
            if ( data[i].objectdemande == "attestation" &&
                data[i].statut == "en attente") {
                nbAttestation += data[i].nbDemande
            }
            if ( data[i].objectdemande == "duplicataAttestation" && 
                data[i].statut == "en attente") {
                nbAttestation += data[i].nbDemande
            }
            if ( data[i].objectdemande == "certificat" &&
                data[i].statut == "en attente" ) {
                nbCertificat = data[i].nbDemande
            }
            if ( data[i].objectdemande == "releve" &&
                data[i].statut == "en attente") {
                nbReleve += data[i].nbDemande
            }

            if ( data[i].statut == "satisfait") {
                nbT += data[i].nbDemande
            }
            if ( data[i].objectdemande == "diplome" && 
                data[i].statut == "satisfait" ) {
                nbDiplomeT += data[i].nbDemande 
            } 
            if ( data[i].objectdemande == "duplicataDiplome" &&
                data[i].statut == "satisfait" ) {
                nbDiplomeT += data[i].nbDemande 
            } 
            if ( data[i].objectdemande == "attestation" &&
                data[i].statut == "satisfait") {
                nbAttestationT += data[i].nbDemande
            }
            if ( data[i].objectdemande == "duplicataAttestation" && 
                data[i].statut == "satisfait") {
                nbAttestationT += data[i].nbDemande
            }
            if ( data[i].objectdemande == "certificat" &&
                data[i].statut == "satisfait" ) {
                nbCertificatT = data[i].nbDemande
            }
            if ( data[i].objectdemande == "releve" &&
                data[i].statut == "satisfait") {
                nbAttestationT += data[i].nbDemande
            }
        }   
    }


    return (
        <div className={D.child2}>
            <div className={D.block}>
                <div className={D.head}>
                    <FaWpforms />
                    <b> {nb} </b>&nbsp; Demandes adressé
                </div>
                <p className = {D.first}>
                    • <b>{nbDiplome} </b> demande ( Diplôme + Duplicata) <br />
                </p>
                <p>
                    • <b>{nbAttestation} </b> demande ( Attestation de réussite + &nbsp;&nbsp;Duplicata) <br />
                </p>
                <p>
                    • <b>{nbCertificat} </b> demande ( Certificat d'authenticité ) <br />
                </p>
                <p>
                    • <b>{nbReleve} </b> demande ( Relevé de note ) <br />
                </p>
            </div>

            <div className={D.block}>
                <div className={D.head}>
                    <FaWpforms />
                    <b>{nbT} </b>&nbsp;
                    Demandes satisfait
                </div>
                <p className = {D.first}>
                    • <b>{nbDiplomeT} </b> demande ( Diplôme + Duplicata) <br />
                </p>
                <p>
                    • <b>{nbAttestationT} </b> demande ( Attestation de réussite + &nbsp;&nbsp;Duplicata) <br />
                </p>
                <p>
                    • <b>{nbCertificatT} </b> demande ( Certificat d'authenticité ) <br />
                </p>
                <p>
                    • <b>{nbReleveT} </b> demande ( Relevé de note ) <br />
                </p>
         
            </div>

            <div className={D.block}>
                <div className={D.head}>
                    <FaRegUser  />
                    <b>{ userConnect + userDisconnect} </b>&nbsp;
                    Compte utilisateur
                </div>
                <p className = {D.first}>
                    <div className = {D.connect}></div>
                     <b className = {D.nb} >{userConnect} </b> Utilisateur connectée
                </p><br />
                <p>
                    <div className = {D.no_connect}></div>
                    <b className = {D.nb} >{userDisconnect} </b> Utilisateur non connectée
                </p>
            </div>

            <div className={D.block}>
                <div className={D.head}>
                    <FaComments />
                    <b id = "nbComments">0</b>&nbsp;
                    Commentaires
                </div>
                <div>
                <FaComments />
                </div>
            </div>

        {/*     <div className={D.block}>
                <div className={D.head}>
                    <FaStar />
                    Abonnés Newsletter
                </div>
                <button>
                    Afficher tout
                </button>
            </div>
            <div className={D.block}>
                <div className={D.head}>
                    <FaStar />
                    Publication sur le site
                </div>
                <button>
                    Afficher tout
                </button>
            </div> */}
        </div>
    )
}

export default ContentDashboard;