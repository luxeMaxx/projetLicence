import React, { useState, useEffect } from "react";
import D from "../../assets/css/DComponent.module.css"
import { FaNewspaper, FaPaperclip, FaPaperPlane, FaStar, FaWpforms } from "react-icons/fa"
import Axios from "axios";



const DComponent = () => {

    const [ data, setData ] = useState ([]);
    const [ dataPers, setDataPers ] = useState ([]);
    const [ dataSort, setDataSort ] = useState ([]);

    // function qui permet de
    const showPerson = ( e, value ) => {
       var names = document.getElementById ("names");
       names.innerText = value
    }

    //fonction qui permet de charger les demandes lors d'un 
    //clique sur une demande spécifique

    const lists = [];

    const showRequest = ( e, index, obj ) => {

        var all = document.querySelectorAll ("#request");
        var nb = document.getElementById ("nbre");

        for ( var i = 0; i < all.length; i++ ) {
            all[i].classList.add (`${D.request_div}`)
            all[i].classList.remove (`${D.request_div_active}`);
        }

        all[index].classList.add (`${D.request_div_active}`);
        nb.innerText = listR[index].nb;
        
        Axios.post ("http://localhost:5000/api/retrieves_data_request", {
            objs : obj
        })
        .then ( (response) => {
            console.log (response.data)
            setDataPers ( response.data)
        })
    }


    var nb = 0;
    var nbDiplome = 0;
    var nbDiplomeD = 0;
    var nbAttestation = 0;
    var nbAttestationD = 0;
    var nbCertificat = 0;
    var nbReleve = 0;

    async function funct () {
        setTimeout(() => {
            Axios.get ("http://localhost:5000/api/retrieve_request")
            .then ( (response) => {
                setData (response.data)
            })
        }, 0);
    }


    useEffect ( () => {
        funct();
    }, [])

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
            nbDiplomeD += data[i].nbDemande 
        } 
        if ( data[i].objectdemande == "attestation" &&
            data[i].statut == "en attente") {
            nbAttestation += data[i].nbDemande
        }
        if ( data[i].objectdemande == "duplicataAttestation" && 
            data[i].statut == "en attente") {
            nbAttestationD += data[i].nbDemande
        }
        if ( data[i].objectdemande == "certificat" &&
            data[i].statut == "en attente" ) {
            nbCertificat = data[i].nbDemande
        }
        if ( data[i].objectdemande == "releve" &&
            data[i].statut == "en attente") {
            nbReleve += data[i].nbDemande
        }
    }   

    
        
    const listR = [
        {nb : nbDiplome, text: "Diplôme", object : "diplome"},
        {nb : nbDiplomeD, text: "Duplicata du Diplôme" , object : "duplicataDiplome"},
        {nb : nbAttestation, text: "Attestation de réussite", object : "attestation"},
        {nb : nbAttestationD, text: "Duplicata Attestation de réussite", object : "duplicataAttestation"},
        {nb : nbCertificat, text: "Certificat d'authenticité", object : "certificat"},
        {nb : nbReleve, text: "Relevé de note", object : "releve"},
    ]

    const personList = [
        ...dataPers
    ]

    //console.log (personList)

    return (
        <div className = {D.block}>
            <div className = {D.block1}>
                <h3>
                    <FaWpforms />
                    <b>{nb} </b>&nbsp;
                    Demande Adressé
                </h3>
                <div className = {D.contentRequest}>
                    { listR.map ( (list, index ) => {
                        return (
                            <div className = {D.request_div}
                            id = "request"
                            onClick = { (e) => showRequest( e, index, list.object)}>
                                <h4>
                                    {list.nb} {""} {list.text}
                                </h4>
                            </div> 
                        )
                    })}
                </div>
            </div>

            <div className = {D.block2}>
                    <div className = {D.b1}>
                        <h4>
                            • <b id = "nbre"></b> Demande
                        </h4>
                        <div className = {D.b1_div}>
                            {personList.map ( person => {
                                return (
                                    <div className = {D.pers}>
                                    <p> Demande de <b>{person.prenom + " " + person.nom} </b> </p>
                                    <button 
                                    onClick = { (e) => showPerson ( e, person.prenom + " " + person.nom )} >
                                        Afficher et Analyser
                                    </button>
                                </div>
                                )
                            })}                 
                        </div>
                    </div>

                    <div className = {D.b2}>
                        <h5>
                           • Demande de <b id = "names"> </b>
                        </h5>
                        <div className = {D.operation}>
                            <svg>
                                <circle cx = "46%" cy = "45%" r = "15%">
                                </circle>
                                <circle cx = "46%" cy = "45%" r = "15%">
                                </circle>
                            </svg>
                            <p className = {D.msg_anal}>Analyse 1/3 terminé</p>
                            <button className = {D.btn_search}>
                                Lancer la Recherche
                            </button>
                        </div>
                        <div className = {D.operation}>
                            <svg>
                                <circle cx = "46%" cy = "45%" r = "15%">
                                </circle>
                                <circle cx = "46%" cy = "45%" r = "15%">
                                </circle>
                            </svg>
                            <p className = {D.msg_anal}>
                                Recherche terminé. Document trouvé
                            </p>
                            <button className = {D.btn_search}>
                                Envoyer
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DComponent