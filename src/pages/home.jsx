import React  from "react"
import { FaComments, FaRegCalendar } from "react-icons/fa"
import H from "../assets/css/Home.module.css"
import Contact from "./partials/contact";
import Bar from "./partials/barHead";


const Home = () => {

    return (
        <>
            <Bar titles = "Accueil" />
            <div className = {H.bloc_section}>
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
                                baccalaureat par une demande
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

                        <h2 className = {H.orther_article}> 
                            Autres article recommandé 
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
                            Comment se faire la demande ?
                        </h3>
                        <p>
                            Pour une demande... 
                            <a href="">Lire la suite</a>
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
                             rows="6">
                                 knn
                             </textarea>

                              <button className = {H.btn_comment}>
                                  Poster 
                              </button>
                        </form>
                        <h2> 20 Commentaires...</h2>

                        { new Array(4).fill().map ( (_, i) => {
                            return (
                                <div className = {H.chat_content}>
                                <h2 className = {H.author}>
                                    <span className = "bi-person-circle"></span>
                                    <span>Andréa Love</span>
                                </h2>
                                <p className = {H.datess}>
                                    20 Aout 2023 à 17h 30
                                </p>
                                <p className = {H.comments}>
                                    Le système est parfait et fiable. 
                                    Tout mes demande ont tous été satisfait 
                                    en rien de temps.
                                    Max on est les meilleurs !!!
                                </p>
                                <a className = {H.btn_rep} href="">
                                    Répondre
                                </a>
                            </div>
                            )
                        } )}
                        
                    </section>
                </div>

                <div className = {H.bloc_child2}>
                    <Contact />
                    <div className = {H.events}>
                        <h2>
                            Evènements
                        </h2>
                        <hr />
                        <p>
                            Aucun évènements prévu
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;