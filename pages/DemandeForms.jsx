import React, { useState } from "react"
import Axios from "axios";
import L from "../assets/css/Register.module.css"
import H from "../assets/css/Home.module.css"
import N from "../assets/css/Notify.module.css"
import Contact from "./partials/contact"
import Bar from "./partials/barHead";
import { validInputText } from "./authentificate/register";
import { useModal } from "react-hooks-use-modal";
import { FaCheck, FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";



const DiplomeForm = ({ titles, label }) => {

    const [Modal, open, close, isopen] = useModal();

    const [typeMsg, setTypeMsg] = useState(0);

    const [val, setVal] = useState({
        prenom: "",
        nom: "",
        date: "",
        lieu: "",
        email: "",
        telephone: "",
        anneBac: null,
        serie: null,
        departement: null,
        numtable: null,
        numJury: "",
        quittance: null,
        piece: null
    })

    const [file, setFile] = useState({
        quittance: null,
        piece: null
    })

    ///function qui recupère les valeur entré dans le champs
    const handleChange = e => {
        setVal({
            ...val,
            [e.target.name]: e.target.value
        })
    }

    const handleChange2 = e => {
        setFile({
            ...file,
            [e.target.name]: e.target.value.files[0]
        })
    }

    // fonction qui renvoie l'object de la demande
    const objRequest = id => {
        var title = document.getElementById(id);
        if (title.innerText === "du diplome") {
            return "diplome"
        } else if (title.innerText === "du duplicata du diplome") {
            return "duplicata diplome"
        } else if (title.innerText === "de l'Attestation de réussite") {
            return "Attestation de réussite"
        } else if (title.innerText === "du duplicata de l'Attestation de réussite") {
            return "duplicata attestation de réussite"
        } else if (title.innerText === "du Certificat d'authenticité") {
            return "Certificat d'authenticité"
        } else if (title.innerText === "du Relevé de note") {
            return "Relevé de note"
        }

    }


    //function qui se declenche lorsqu'on appui sur le button formulaire
    const handleSubmit = e => {
        e.preventDefault()

        var recu = document.getElementById("quittance"),
            piece = document.getElementById("piece"),
            err1 = document.getElementById("erreur_piece"),
            err2 = document.getElementById("erreur_quittance");
        var content = document.getElementById("content_msg");

        // recupération de la date actuelle
        let date1 = new Date();
        let dateLocale = date1.toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });


        validInputText(val.nom, "erreur_nom", "text");
        validInputText(val.prenom, "erreur_prenom", "text");
        validInputText(val.date, "erreur_d", "date");
        validInputText(val.lieu, "erreur_lieuN", "text");
        validInputText(val.email, "erreur_email", "email");
        validInputText(val.telephone, "erreur_tel", "tel");
        validInputText(val.anneBac, "erreur_annee", "number");
        validInputText(val.serie, "erreur_serie", "serie");
        validInputText(val.departement, "erreur_dp", "text");
        validInputText(val.numtable, "erreur_num", "alpha");
        validInputText(val.numJury, "erreur_numJ", "number");

        if (piece.name.length == null) {

            err1.textContent = "sélectioner un fichier";
        } else {
            err1.textContent = "";
        }
        if (recu.name.length == null) {
            err2.textContent = "sélectioner un fichier";
        } else {
            err2.textContent = "";
        }

        const form = new FormData();
        form.append("pdffile", piece.files[0]);
        form.append("pdffile2", recu.files[0])
        console.log(piece.files[0])


        if (validInputText(val.nom, "erreur_nom", "text")
            && validInputText(val.prenom, "erreur_prenom", "text")
            && validInputText(val.date, "erreur_d", "date")
            && validInputText(val.lieu, "erreur_lieuN", "text")
            && validInputText(val.email, "erreur_email", "email")
            && validInputText(val.telephone, "erreur_tel", "tel")
            && validInputText(val.anneBac, "erreur_annee", "number")
            && validInputText(val.serie, "erreur_serie", "serie")
            && validInputText(val.departement, "erreur_dp", "text")
            && validInputText(val.numtable, "erreur_num", "alpha")
            && validInputText(val.numJury, "erreur_numJ", "nb")
            && piece.name.length != null && recu.name.length != null) {

            fetch("http://localhost:5000/api/extract", {
                method: "post",
                body: form
            }).then((response) => {
                return response.text()
            }).then(extratedText => {
                var obj = JSON.parse(extratedText),
                    piece = obj['text1'],
                    recu = obj['text2'];


                var indice = piece.search("Déclaration sur l'honneur");
                var indice2 = recu.search("Déclaration sur l'honneur");
                console.log(indice)
                // traitement et envoie des donnée de le demandaus serveur
                if (indice == 2) {
                    console.log("Déclaration sur l'honneur");
                    if (indice2 == 2) {
                        console.log("Déclaration sur l'honneur");
                        Axios.post("http://localhost:5000/api/insert_data_request", {
                            userId: sessionStorage.getItem("userId"),
                            prenomUser: sessionStorage.getItem("lastname"),
                            prenom: val.prenom,
                            nom: val.nom,
                            dateNaiss: val.date,
                            lieuNaiss: val.lieu,
                            email: val.email,
                            telephone: val.telephone,
                            annee: val.anneBac,
                            serie: val.serie,
                            numTable: val.numtable,
                            numJury: val.numJury,
                            departement: val.departement,
                            recuPaie: recu,
                            file: piece,
                            objDemande: objRequest("objs"),
                            dateDemande: dateLocale
                        }).then((response) => {
                            console.log(response.data);

                            if (response.data == "ok") {
                                close()
                                open()
                                setTypeMsg(0)

                            } else if (response.data == "demande impossible") {
                                close()
                                open()
                                setTypeMsg(1)
                                document.getElementById("link_err").addEventListener('click', () => {
                                    window.location.href = "/espace&demande"
                                })
                            }
                        })

                    } else {
                        close()
                        open()
                        setTypeMsg(1);
                        document.getElementById("text_error").innerText = "Le fichier choisir ne correspond pas à un reçu bancaire au nom de la DOB."
                        document.getElementById("link_err").innerText = "Retour";
                        document.getElementById("link_err").addEventListener('click', () => {
                            close()
                        })
                    }
                } else {
                    console.log("pko")
                    close()
                    open()
                    setTypeMsg(1);
                    document.getElementById("text_error").innerText = "La pièce choisir choisir ne correspond par à la pièce attendu."
                    document.getElementById("link_err").innerText = "Retour";
                    document.getElementById("link_err").addEventListener('click', () => {
                        close()
                    })
                }
            })
        }
    }

    const showComponent = () => {
        if (typeMsg == 0) {
            return (
                <div className={N.block}>
                    <FaCheckCircle />
                    <p>Demande envoyé avec succès !!!</p>
                    <p>
                        Vérifié votre boite email pour verifié
                        le message de reception de la demande par la DOB.
                    </p>
                    <a href="/espace&demande">
                        Voir mes demandes
                    </a>
                </div>
            )
        } else if (typeMsg == 1) {
            return (
                <div className={N.block} id={N.echec}>
                    <FaTimesCircle />
                    <p>Echec de l'envoie !!</p>
                    <p id="text_error">
                        Vous ne pouvez pas effectuer deux fois une même demande .
                    </p>
                    <a id="link_err">
                        Consulter mes demandes
                    </a>

                </div>
            )
        }

    }




    const statusPage = (e) => {
        return window.location.href = "/notifySuccess"
    }

    const year = [];
    for (var i = 15; i < 30; i++) {
        year.push("20" + i)
    }

    const series = ["A", "AB", "B", "C", "D", "E", "F", "G", "G1", "G2", "G3"];
    const departement = ["Atacora", "Alibori", "Atlantique", "Borgou",
        "Donga", "Litoral", "Oueme", "Zou", "Mono", "Couffo", "Plateau"]

    return (
        <>
            <Bar titles="Demande du diplôme" />
            <div className={L.login_block}>
                <Modal>
                    {showComponent()}
                </Modal>
                <div className={L.form}>
                    <form autoComplete="off" >
                        <h2>
                            Postuler pour la demande <br />
                            <b id="objs">{titles}</b>
                        </h2>
                        <hr />
                        <div className={L.form_divs}>
                            <div>
                                <label> Prénoms</label>
                                <input type="text"
                                    name="prenom" id="prenom"
                                    placeholder="Entré votre prénom..."
                                    value={val.prenom}
                                    onChange={handleChange}
                                />
                                <span className={L.error} id="erreur_prenom">
                                </span>
                            </div>
                            <div>
                                <label> Nom</label>
                                <input type="text"
                                    name="nom" id="nom"
                                    placeholder="Entré votre nom de famille..."
                                    value={val.nom}
                                    onChange={handleChange}
                                />
                                <span className={L.error} id="erreur_nom">
                                </span>
                            </div>
                        </div>

                        <div className={L.form_divs}>
                            <div>
                                <label> Date de naissance</label>
                                <input type="date"
                                    name="date" id="date"
                                    className={L.date}
                                    placeholder="Votre nom date de naissance..."
                                    value={val.date}
                                    onChange={handleChange}
                                />
                                <span className={L.error} id="erreur_d">
                                </span>
                            </div>
                            <div>
                                <label> Lieu de naissance</label>
                                <input type="text"
                                    name="lieu" id="lieu"
                                    placeholder="Votre lieu de naissance..."
                                    value={val.lieu}
                                    onChange={handleChange}
                                />
                                <span className={L.error} id="erreur_lieuN" >
                                </span>
                            </div>
                        </div>

                        <div className={L.form_div}>
                            <label> Adresse email valide</label>
                            <input type="email"
                                name="email" id="email"
                                placeholder="Votre email..."
                                value={val.email}
                                onChange={handleChange}
                            />
                            <span className={L.error} id="erreur_email">
                            </span>
                        </div>

                        <div className={L.form_div}>
                            <label> Numéro de téléphone</label>
                            <input type="text"
                                name="telephone" id="telephone"
                                placeholder="Votre numéro de téléphone..."
                                value={val.telephone}
                                onChange={handleChange}
                            />
                            <span className={L.error} id="erreur_tel">
                            </span>
                        </div>

                        <div className={L.form_divs}>
                            <div>
                                <label> Année de bac *</label>
                                <select name="anneBac" id="anneBac"
                                    className={L.selects}
                                    value={val.anneBac}
                                    onChange={handleChange}>
                                    <option selected disabled>
                                        Sélectionner votre année d'obtention de bac
                                    </option>
                                    <option selected disabled>choisissez votre de bac...</option>
                                    {year.map(y => {
                                        return (
                                            <option value={y}>{y}</option>
                                        )
                                    })}
                                </select>
                                <span className={L.error} id="erreur_annee">
                                </span>
                            </div>
                            <div>
                                <label> Série du bac *</label>
                                <select name="serie" id="serie"
                                    className={L.selects}
                                    value={val.serie}
                                    onChange={handleChange}
                                >
                                    <option selected disabled>
                                        Sélectionner la série du bac
                                    </option>
                                    {series.map(s => {
                                        return (
                                            <option value={s}>{s}</option>
                                        )
                                    })}
                                    <option value="">D</option>

                                </select>
                                <span className={L.error} id="erreur_serie">
                                </span>
                            </div>
                        </div>

                        <div className={L.form_divs}>
                            <div>
                                <label> Département de composition *</label>
                                <select name="departement" id="departement"
                                    className={L.selects}
                                    value={val.departement}
                                    onChange={handleChange}
                                >
                                    <option selected disabled>
                                        Sélectionner votre département de composition
                                    </option>
                                    {departement.map(d => {
                                        return (
                                            <option value={d}>{d}</option>
                                        )
                                    })}
                                </select>
                                <span className={L.error} id="erreur_dp">
                                </span>
                            </div>
                            <div>
                                <label> Numéro de table </label>
                                <input type="text"
                                    name="numtable" id="numtable"
                                    placeholder="Votre numéro de table"
                                    value={val.numtable}
                                    onChange={handleChange}
                                />
                                <span className={L.error} id="erreur_num" >
                                </span>
                            </div>
                        </div>

                        <div className={L.form_divs}>
                            <div>
                                <label> Numéro de jury </label>
                                <input type="text"
                                    name="numJury" id="numJury"
                                    placeholder="Numéro de Jury"
                                    value={val.numJury}
                                    onChange={handleChange}
                                />
                                <span className={L.error} id="erreur_numJ" >
                                </span>
                            </div>
                        </div>
                        <div className={L.form_divs}>
                            <div>
                                <label> {label} <br /></label>
                                <input type="file"
                                    name="piece" id="piece"
                                    accept=".pdf"
                                    value={file.piece}
                                    onChange={handleChange2}
                                />
                                <span className={L.error} id="erreur_piece" >
                                </span>
                            </div>
                            <div>
                                <label> Reçu bancaire *</label>
                                <input type="file"
                                    name="quittance" id="quittance"
                                    placeholder="Votre reçu de paiement bancaire"
                                    accept=".pdf"
                                    value={file.quittance}
                                    onChange={handleChange2}
                                />
                                <span className={L.error} id="erreur_quittance" >
                                </span>
                            </div>
                        </div>


                        <p>
                            Assurez-vous de la conformité des informations,
                            puis cliquer sur
                        </p>
                        <button onClick={handleSubmit}>
                            Envoyer
                        </button>
                    </form>
                </div>
                <Contact />
            </div>
        </>
    )
}

export default DiplomeForm;