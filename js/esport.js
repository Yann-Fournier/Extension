var divEsport = document.getElementById('divEsport');
var game = document.getElementById('game');
var inGame = document.getElementById('inGame');


document.getElementById('esport').addEventListener('click', function()  {
    //console.log("Esport");
    displayDivEsport();
});

document.getElementById('buChoseGame').addEventListener('click', function() {
    console.log(inGame.value);
});

// Esport ***************************************************************************************************************************************************************
//Test
var esp = document.createElement('p');
esp.innerHTML="Esport";
divEsport.appendChild(esp);

function Esport() {}

function displayDivEsport() {
    // affiche info
    divStream.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divEsport.style = "display:block;width:330px;height:222px;";
    MenuAddFav.style = "display: none;"

    // affiche choice
    options.style = "padding: 5px;width: 440px;height: 40px;display: flex;justify-content: center;z-index: 100;margin-top: 10px;margin-bottom: 10px;";
    titre.style = "display:none;";
    year.style = "display:none;";
    addFav.style = "display:none;"
    game.style = 'display:flex;'

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(178, 255, 255, 0);";
        boutons[i].classList = "buesport";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(178, 255, 255, 1);}";
    }
    boutons[1].style = "background-color: rgb(205, 255, 255);box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);";
    //corps.style = "background-color: rgba(0, 34, 255, 0.477);";
    icon.src = "../images/icons/esport.png";
    icon.style = "width:50px; height:50px;"

    Esport();
}

// const Options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.pandascore.co/additions?sort=&page=1&per_page=50&type=&videogame=', Options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
