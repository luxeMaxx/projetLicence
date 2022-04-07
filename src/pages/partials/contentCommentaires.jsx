import React, { useEffect, useState } from "react";
import C from "../../assets/css/Commentaire.module.css"
import { FaComments, FaStickerMule, FaUser } from "react-icons/fa"
import Axios from "axios"


const Commentaire = () => {

    const [ dataComments, setDataComments ] = useState([]);

    useEffect ( () => {
        Axios.get ("http://localhost:5000/api/request_comments")
        .then ( (response) => {
            console.log (response.data)
            setDataComments ( response.data)
        })
    }, [])    

    const showSondage = e => {
        var all = document.querySelectorAll ("#block_c3 p");
        for ( var i = 0; i < all.length; i++ ) {
            all[i].style.display = "block"
        }
    }

    return (
        <div className = {C.block_comment}>
            <div className = {C.block_c1}>
                <h3>
                <FaComments/> <b id = "nb1" >{dataComments.length} </b> Commentaires
                </h3>
                <p>
                    • <b id = "nb2">{dataComments.length}</b>&nbsp;
                    Commentaires ces derniers semaine
                </p>
            </div>
            <div className = {C.block_c2}>
                <div className = {C.block_com}>
                    { dataComments.map (( list, i ) => {
                        return (
                            <div className = {C.comments}>
                                 <FaUser/>
                                <b id = "author" >{list.prenom +" "+ list.nom} </b>
                                <p id = "date"  >{ list.dates.split("T")[0] + " à " + list.heure}</p>
                                <p className = {C.msg} id = "comments">
                                    {list.message}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className = {C.block_c3} id = "block_c3">
                <button id = "btn"
                    onClick = {showSondage}>
                    Effectuer une sondage
                </button>
                <p><b>95%</b> des utilisateur sont satisfait</p>
                <p><b>5%</b> des utilisateurs sont mécontent <FaStickerMule/> </p>
            </div>
        </div>
    )
}

export default Commentaire