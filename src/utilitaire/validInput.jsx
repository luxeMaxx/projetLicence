


 //function qui permet de vérifier la validité des champs
 export function validInputText ( value, id_error, type) {
    var regex = /^[a-zA-ZéèêïÏ]*$/,
        regexTel = /[+]+[0-9]*$/,
        regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/,
        regexAlphaN = /^[a-zA-Z0-9]*$/,
        regexAlphaN = /[0-9]{2}$/,
        regexAn = /^[0-9]*$/,
        regexC =  /^[A-Z]*$/,
        regexFile = /^[a-zA-Z0-9]+\.(pdf)*$/,
        error = document.getElementById (id_error);

    if ( type === "text" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
           // animeSpan (id_error);
            return false;
        } 
        else if ( value.length < 3 ) {
            error.textContent = "Ce champs est trop court...";
            //animeSpan (id_error);
            return false;
        } 
        else if ( regex.test (value) == false ) {
            error.textContent = "format invalide...";
           // animeSpan (id_error);
            return false;
        }
        else {
            error.textContent = "";
            return true;
        } 
    }
    else if ( type === "tel" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            //animeSpan (id_error);
            return false;
        } 
        else if ( value.length < 9 ) {
            error.textContent = "le numéro est trop court...";
           // animeSpan (id_error);
            return false;
        } 
        else if ( regexTel.test (value) == false ) {
            error.textContent = "format du numéro invalide...";
            //animeSpan (id_error);
            return false;
        }
        else {
            error.textContent = "";
            return true;
        } 
    }
    else if ( type === "email" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
           // animeSpan (id_error);
            return false;
        } 
        else if ( regexEmail.test (value) == false ) {
            error.textContent = "format de l'email est invalide...";
           // animeSpan (id_error);
            return false;
        }
        else {
            error.textContent = "";
            return true;
        } 
    }  
    else if ( type === "date" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            //animeSpan (id_error)
            return false;
        } 
        
        else {
            error.textContent = "";
            return true;
        } 
    } 
    else if ( type === "pwd" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            //animeSpan (id_error)
            return false;
        } 
        else if ( value.length < 6 ) {
            error.textContent = "Mot de passe trop court... Au moins 6 caratères alphanumérique";
            //animeSpan (id_error)
            return false;
        }
        else {
            error.textContent = ""
            return true;
        } 
    }    
    else if ( type === "alpha" ) {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            //animeSpan (id_error)
            return false;
        } 
        else if ( value.length < 3 ) {
            error.textContent = "numéro trop court...";
            //animeSpan (id_error)
            return false;
        }
        else if ( regexAlphaN.test (value) == false ) {
            error.textContent = "le numéro de table doit ètre alphanumérique...";
            return false;
        }
        else {
            error.textContent = ""
            return true;
        }  
        

    }

    else if ( type === "number" ) {
        if ( !value ) {
            error.textContent = "Sélectionné un année..";
            //animeSpan (id_error)
            return false;
        } else {
            error.textContent = "";
            return true
        }
    }

    else if ( type === "serie") {
        if ( !value ) {
            error.textContent = "Sélectionné une série..";
            //animeSpan (id_error)
            return false;
        } else {
            error.textContent = "";
            return true
        }
    }

    else if ( type === "file" ) {
        if ( value.files[0].length === "" ) {
            error.textContent = "Veuillez sélectionnez un fichier...";
            return false;
        }
        else {
            error.textContent  = "";
            return true
        }
    }
    else if ( type === "nb") {
        if ( !value ) {
            error.textContent = "Ce champ est vide...";
            return false;
        }
        else if ( regexAn.test (value) == false) {
            error.textContent = "Format invalide..."
            return false;
        }
        else {
            error.textContent  = "";
            return true
        }
    }
}


// function qui permet de voir mot de passe en clair
export const changeType = ( e, id ) => {
    e.preventDefault();
    var pwd =  document.getElementById (id);

    if ( pwd.type === "password" ) {
        pwd.type = "text"
    } else {
        pwd.type = "password"
    }
}
