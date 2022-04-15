import React, { useEffect, useState }  from "react"
import { FaCheck, FaComments, FaRegCalendar } from "react-icons/fa"
import H from "../assets/css/Home.module.css"
import Contact from "./partials/contact";
import Bar from "./partials/barHead";
import Axios from "axios";
import { useModal } from "react-hooks-use-modal";



const Home = () => {

    const [ Modal, open, close, isopen ] = useModal ();

    const [ val, setVal ] = useState({
        message : ""
    })

    const [ comments, SetComments ] = useState ([])

    const handleChange = e => {
        setVal ({
            ...val,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        var msg = document.getElementById ("message"),
            span = document.getElementById ("erreur"),
            regex = /^[a-zA-Zéêèî'`\s]*$/;

            span.style.color = "#ff5500";
            span.style.fontSize = "0.9vw"

            var date = new Date();
            var date1 = date.toLocaleString ('fr-FR',{
                weekday : 'long',
                year : 'numeric',
                month : 'long',
                day : 'numeric',
                hour : 'numeric',
                minute : 'numeric',
                second : 'numeric'
            })
            var hour = date1.split(",")[1].replace (" ", "");
            var dates  = date1.split(",")[0].replace (" ", "");
         
            if ( sessionStorage.getItem ('name') != null ) {
            if ( !val.message ) {
                span.textContent = "Entré un commentaires...";
            } else if ( regex.test ( val.message ) == false ) {
                span.textContent = "Entré uniquement du texte clair...";
            } else if ( val.message.length < 4 ) {
                span.textContent = "text trop court...";
            } else {
                span.textContent = "";
                Axios.post ("http://localhost:5000/api/insert_comments", {
                    userId : sessionStorage.getItem ('userId'),
                    message : val.message,
                    date : dates,
                    hour : hour
                }).then ( (response) => {
                    console.log ( response.data );
                    if ( response.data == "ok" ) {
                        open ();
                    }
                })
            }
        } else {
            window.location.href = "/seConnecter"
        }
    }

    useEffect ( () => {
        Axios.post ("http://localhost:5000/api/retrieve_comments")
        .then ( (response) => {
            SetComments (response.data)
        })
    }, [] )

    const listComment = [
        ...comments
    ]

    return (
        <>
            <Bar titles = "Accueil" />
            <div className = {H.bloc_section}>
            
            <Modal>
                <div className = {H.msg_comments}>
                     <FaCheck />
                    <p>
                        Votre commentaire é été bien envoyer !!!
                    </p>
                    <a href="/">Retour à l'accueil</a>
                </div>
            </Modal>
                <div className = {H.bloc_child1}>

                    <div className = {H.head_bloc}
                        style = {{
                            backgroundImage : "url(/images/siege.jpg",
                            backgroundSize : "100%",
                            backgroundRepeat : "no-repeat"
                        }}>
                        
                        <div className = {H.img_face}>
                            <h1>
                                Retiré vos pièce justificatif du
                                baccalaureat en ligne
                            </h1>
                        </div>
                    </div>

                    <h4 className = {H.inf}>
                        Informations
                    </h4>
                    <article>
                        <h1 id = "title_article" className = {H.title_article}>
                            Comment retiré son Diplome, son attestation de réussite
                            et son relevé de note en ligne ?
                        </h1>

                        <div className = {H.infos_date}>
                            <FaRegCalendar />
                            <span className = {H.date}>
                                20 juillet 2023
                            </span>
                            <FaComments />
                            <span className = {H.date}>
                                25 Commentaires
                            </span>
                        </div>
                        <p className = {H.para1}> 
                                Pour l'obtention de votre Diplome, Attestation
                                de réussite ou relevé de note du baccalauréat, 
                                vous pouvez faire une demande en ligne et 
                                suivre votre dossier. Une fois que votre pièce 
                                est disponible, l'office du bac vous contactera et
                                us l'enverrai via votre boite mail.
                                Vous pouvez faire une demande une 
                                demande de duplicata de votre pièce en cas de perte.
                                Suivez ces étapes.
                            </p>
                            <h3 className = {H.title_sous}>
                                • Etapes à suivre:
                            </h3>
                        <div className = {H.body_article}>
                            <p className = {H.para_p}>
                                <h3>1. Créer un compte </h3>
                                <p className = {H.content_p}>
                                    Pour commencer, vous devez
                                    <a href="/creer&compte">créer votre 
                                    compte  </a> 
                                     en remplissant tout les  champs par
                                    vos informations personnel. Verifier si les
                                    informations entré son valide, puis cliquer sur 
                                    s'inscrire.
                                </p>

                                <h3>
                                    2. Validé le mail de comfirmation <br />
                                     &nbsp;&nbsp;&nbsp;qui vous été envoyé 
                                </h3>
                                <p className = {H.content_p}>
                                    Une fois cliquer sur s'inscrire, 
                                    un mail de confirmation vous sera 
                                    envoyé. Cliquer sur confirmer pour 
                                    valider le mail.Une fois cliquer sur 
                                    s'inscrire, une mail de confirmation 
                                    vous sera envoyé. Cliquer sur confirmer 
                                    pour valider le mail.
                                </p>

                                <h3>
                                    3. Votre compte est maintenant créer. <br />
                                    &nbsp;&nbsp;&nbsp;Connecter vous pour compléter votre 
                                    profil.
                                </h3><br />
                                <p className = {H.content_p}>
                                    " Une fois tout ces étapes passer 
                                    avec succès, vous pouvez maintenant 
                                    faire une demande en cliquant sur 
                                    Effectuer une demande. " <br /><br />
                                    <b>
                                        NB: Pour tout demande, vous devez ètre connecter. 
                                    </b>
                                </p>
                            </p>
                        </div>

                        <h2 className = {H.orther_article} id = "autres"> 
                            Bon à savoir
                        </h2>
                        <h3 className = {H.title_sous}>
                            Quelle sont les démarche à suivre pour <br /> effectuer une demande ?
                        </h3>
                        <p>
                            Pour une demande... 
                            <a href="/demarche&demande">Lire la suite</a>
                        </p>

                        <h3 className = {H.title_sous}>
                            Quelles sont les pièces à fournir pour une <br /> demande ?
                        </h3>
                        <p>
                            Tout les pièces...
                            <a href="/pieceafournir">Lire la suite</a>
                        </p>
                        <h3 className = {H.title_sous}>
                            Comment suivre mon dossier après une demande ?
                        </h3>
                        <p>
                            Pour une demande... 
                            <a href="/suivreMonDossier">Lire la suite</a>
                        </p>
                    </article>

                    <section className = {H.section_comment}>
                        <h1>
                            Laissez un commentaire...
                        </h1>
                        <form autoComplete = "off">
                            <textarea name="message"
                             id="message" 
                             cols="40" 
                             rows="6"
                             value = {val.message}
                             onChange = {handleChange}>
                                 
                             </textarea>
                            <span id = "erreur"></span>
                              <button className = {H.btn_comment}
                                onClick = {handleSubmit}>
                                  Poster 
                              </button>
                        </form>
                        <h2> 20 Commentaires...</h2>

                        { listComment.map ( c => {
                            return (
                                <div className = {H.chat_content}>
                                <h2 className = {H.author}>
                                    <span className = "bi-person-circle"></span>
                                    <span>{sessionStorage.getItem ('name') + " " + sessionStorage.getItem ('lastname')} </span>
                                </h2>
                                <p className = {H.datess}>
                                    {c.dates.charAt(0).toUpperCase() + c.dates.slice(1)} à {c.heure.split('.')[0]}
                                </p>
                                <p className = {H.comments}>
                                    {c.message}
                                </p>
                            </div>
                            )
                        } )}
                        
                    </section>
                </div>
                    <Contact />
            </div>
        </>
    )
}

export default Home;