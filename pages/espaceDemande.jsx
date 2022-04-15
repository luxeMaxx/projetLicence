import React, { useState, useEffect } from "react";
import Contact from "./partials/contact";
import E from "../assets/css/Espace.module.css";
import Bar from "./partials/barHead";
import { FaUser, FaUserAlt } from "react-icons/fa";
import Axios from "axios"


const Espace = () => {

    const [datas, setData] = useState('');
    const [dataUserRequest, setDataUserRequest] = useState([]);

    var data = sessionStorage.getItem("nom");

    var name = sessionStorage.getItem('name')
    var lastname = sessionStorage.getItem('lastname')

    const list2 = []


    var date1 = null;
    var date2 = null;
    var date3 = null;
    var date4 = null;
    var date5 = null;
    var date6 = null;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    var c5 = 0;
    var c6 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var s4 = 0;
    var s5 = 0;
    var s6 = 0;

    useEffect(() => {
        if (sessionStorage.getItem("userId")) {
            Axios.post("http://localhost:5000/api/data_user_request", {
                userId: sessionStorage.getItem("userId")
            }).then((response) => {
                if (response.data != "Aucune demande effectuer") {
                    setDataUserRequest(response.data)
                    //console.log (dataUserRequest)


                    const user = [
                        ...dataUserRequest
                    ]

                    if (user.length != 0) {

                        for (var i = 0; i < user.length; i++) {
                            if (user[i].objectDemande == "Certificat d'authenticité") {
                                c1 += 1;
                                date1 = user[i].dateDemande
                                s1 = user[i].statut

                                sessionStorage.setItem('certificat', c1)
                                sessionStorage.setItem('date1', date1)
                                sessionStorage.setItem('statut1', s1)
                            }
                            if (user[i].objectDemande == "Relevé de note") {
                                c2 += 1;
                                date2 = user[i].dateDemande
                                s2 = user[i].statut

                                sessionStorage.setItem('releve', c2)
                                sessionStorage.setItem('date2', date2)
                                sessionStorage.setItem('statut2', s2)
                            }
                            if (user[i].objectDemande == "diplome") {
                                c3 += 1;
                                date3 = user[i].dateDemande
                                s3 = user[i].statut

                                sessionStorage.setItem('diplome', c3)
                                sessionStorage.setItem('date3', date3)
                                sessionStorage.setItem('statut3', s3)
                            }
                            if (user[i].objectDemande == "Attestation de réussite") {
                                c4 += 1;
                                date4 = user[i].dateDemande
                                s4 = user[i].statut

                                sessionStorage.setItem('attestation', c4)
                                sessionStorage.setItem('date4', date4)
                                sessionStorage.setItem('statut4', s4)
                            }
                            if (user[i].objectDemande == "duplicata diplome") {
                                c5 += 1;
                                date5 = user[i].dateDemande
                                s5 = user[i].statut

                                sessionStorage.setItem('duplicata diplome', c5)
                                sessionStorage.setItem('date5', date5)
                                sessionStorage.setItem('statut5', s5)
                            }

                            if (user[i].objectDemande == "duplicata attestation de réussite") {
                                console.log(user[i].objectDemande)
                                c6 += 1;
                                date6 = user[i].dateDemande
                                s6 = user[i].statut

                                sessionStorage.setItem('duplicata attestation', c6)
                                sessionStorage.setItem('date6', date6)
                                sessionStorage.setItem('statut6', s6)
                            }
                        }
                    }
                } else {
                    setDataUserRequest(response.data)
                    console.log(response.data)
                    sessionStorage.setItem('empty', response.data)
                }
            })
        }
    });


    var certificat = sessionStorage.getItem('certificat');
    var date1 = sessionStorage.getItem('date1')
    var statut1 = sessionStorage.getItem('statut1')

    var diplome = sessionStorage.getItem('diplome');
    var date3 = sessionStorage.getItem('date3')
    var statut3 = sessionStorage.getItem('statut3')

    var releve = sessionStorage.getItem('releve');
    var date2 = sessionStorage.getItem('date2')
    var statut2 = sessionStorage.getItem('statut2')

    var attestation = sessionStorage.getItem('attestation');
    var date4 = sessionStorage.getItem('date4')
    var statut4 = sessionStorage.getItem('statut4')

    var diplomed = sessionStorage.getItem('duplicata diplome');
    var date5 = sessionStorage.getItem('date5')
    var statut5 = sessionStorage.getItem('statut5')

    var attestationd = sessionStorage.getItem('duplicata attestation');
    var date6 = sessionStorage.getItem('date6')
    var statut6 = sessionStorage.getItem('statut6')

    function isexiste(text, obj, date, statut) {
        if (obj == '0' || obj == null) {
            ///console.log("vide")
        } else if (obj != "0" || obj != null) {
            list2.push({ obj, text, date, statut })
        }

    }

    isexiste("Certificat d'authenticité", certificat, date1, statut1)
    isexiste("Diplome", diplome, date3, statut3)
    isexiste("Duplicata du diplome", diplomed, date5, statut5)
    isexiste("Attestation de réussite", attestation, date4, statut4)
    isexiste("Duplicata de l'Attestation de réussite", attestationd, date6, statut6)
    isexiste("Relevé de note", releve, date2, statut2)



    function showRequest() {
        if (sessionStorage.getItem('empty') == null) {
            return (
                <>
                    {list2.map((val) => {
                        return (
                            <>
                                <div className={E.block_d}>
                                    <h4>• {val.text} </h4>
                                    <p>
                                        Demande fait le {val.date} par vous. <br />
                                        <span>Status :</span> {val.statut}
                                    </p>
                                </div>
                            </>
                        )
                    })}
                </>
            )
        } else {
            return (
                <h2>Aucune demande effectuer</h2>
            )
        }
    }
    return (
        <>
            <Bar titles="Espace Utilisateur" />
            <div className={E.block_espace}>
                <div className={E.block_child}>
                    <h1>
                        Mon espace de demande utilisateur
                    </h1>
                    <h3>
                        <FaUser />
                        {lastname + " " + name}
                    </h3>
                    <div className={E.liste_d}>
                        {showRequest()}
                    </div>
                    <button>
                        Historique de demande
                    </button>
                </div>
                <Contact />
            </div>
        </>
    )
}

export default Espace;