import React from "react";
import H from "../../assets/css/Home.module.css"


const Contact = () => {

  /*   window.addEventListener ("scroll", () => {
        if ( window.scrollY > 700 && window.innerWidth > 620 ) {
            document.getElementById ("contact").style.position = "fixed"
            document.getElementById ("contact").style.top = "0%"
            document.getElementById ("contact").style.right = "12.5%"
        } else {
            document.getElementById ("contact").style.position = "none"
            document.getElementById ("contact").style.top = ""
        }

    }) */

     // On initialise la latitude et la longitude de Paris (centre de la carte)
 /*     var lat = 48.852969;
     var lon = 2.349903;
     var macarte = null;
     // Fonction d'initialisation de la carte
     function initMap() {
         // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
         macarte = L.map('map').setView([lat, lon], 11);
         // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
         L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
             // Il est toujours bien de laisser le lien vers la source des données
             attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
             minZoom: 1,
             maxZoom: 20
         }).addTo(macarte);
     } */

    return (
        <div className={H.contact} id = "contact">
            <h2> Nous Contacter </h2>
            <hr />
            <h3>
                OFFICE DU BACCALAUREAT
            </h3>
            <p>
                <span className={H.sp}>Adresse:</span>
                Rue 222, Cotonou
            </p>
            <p>
                <span className={H.sp}>Téléphone:</span>
                21 32 02 64
            </p>
            <p>
                <span className={H.sp}>Email:</span>
                <a href="">
                    mgangbala610@gmail.com
                </a>
            </p>

            {<img src="/images/maps.png"
                alt="logo" />}
        </div>

    )
}

export default Contact;