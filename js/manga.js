var divManga = document.getElementById('divManga');

var titre = document.getElementById('titre');
var buTitre = document.getElementById('buTitre');

document.getElementById('manga').addEventListener('click', function() {
    displayDivManga()
});

// Manga ****************************************************************************************************************************************************************
//Test
var man = document.createElement('p');
man.innerHTML="Manga";
divManga.appendChild(man);

function displayDivManga() {
    // affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:block;width:330px;height:222px;";
    MenuAddFav.style = "display: none;"

    // affiche choice
    options.style = "padding: 5px;width: 440px;height: 40px;display: flex;justify-content: center;z-index: 100;margin-top: 10px;margin-bottom: 10px;";
    year.style = "display:none;";
    addFav.style = "display:none;";
    game.style = 'display:none;';
    titre.style = "display:flex;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(255, 0, 255, 0);";
        boutons[i].classList = "bumanga";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 255, 1);}";
    }
    boutons[4].style = "background-color: rgb(251, 149, 234,1);box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);";
    //corps.style = "background-color: rgb(255, 133, 255);";
    icon.src = "../images/icons/manga.png";
    icon.style = "width:50px; height:50px;"
}





