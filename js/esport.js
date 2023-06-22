var divEsport = document.getElementById('divEsport');
var game = document.getElementById('game');
// boutons
var buLOL = document.getElementById('buLOL');
var buValo = document.getElementById('buValo');
var buTFT = document.getElementById('buTFT');
var buRL = document.getElementById('buRL');
// div
var divLOL = document.getElementById('affLOL');
var divValo = document.getElementById('affValo');
var divTFT = document.getElementById('affTFT');
var divRL = document.getElementById('affRL');


document.getElementById('esport').addEventListener('click', function()  {
    //console.log("Esport");
    displayDivEsport();
});

buLOL.addEventListener('click', function() {
    displayLOL();
});

buValo.addEventListener('click', function() {
    displayValo();
});

buTFT.addEventListener('click', function() {
    displayTFT();
});

buRL.addEventListener('click', function() {
    displayRL();
});

// Affichage ***************************************************************************************************************************************************************
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
    game.style = "display:flex; flex-direction: row; justify-content: space-between;"

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
}

function displayLOL() {
    // boutons
    buLOL.className = "gameSelected";
    buValo.className = "gameNotSelected";
    buTFT.className = "gameNotSelected";
    buRL.className = "gameNotSelected";
    // div
    divLOL.className = "affGame";
    divValo.className = "notAffGame";
    divTFT.className = "notAffGame";
    divRL.className = "notAffGame";
}

function displayValo() {
    // boutons
    buLOL.className = "gameNotSelected";
    buValo.className = "gameSelected";
    buTFT.className = "gameNotSelected";
    buRL.className = "gameNotSelected";
    // div
    divLOL.className = "notAffGame";
    divValo.className = "affGame";
    divTFT.className = "notAffGame";
    divRL.className = "notAffGame";
}

function displayTFT() {
    // boutons
    buLOL.className = "gameNotSelected";
    buValo.className = "gameNotSelected";
    buTFT.className = "gameSelected";
    buRL.className = "gameNotSelected";
    // div
    divLOL.className = "notAffGame";
    divValo.className = "notAffGame";
    divTFT.className = "affGame";
    divRL.className = "notAffGame";
}

function displayRL() {
    // boutons
    buLOL.className = "gameNotSelected";
    buValo.className = "gameNotSelected";
    buTFT.className = "gameNotSelected";
    buRL.className = "gameSelected";
    // div
    divLOL.className = "notAffGame";
    divValo.className = "notAffGame";
    divTFT.className = "notAffGame";
    divRL.className = "affGame";
}

// LOL ******************************************************************************************************************************************************************************************
currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var weekNBR = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
// console.log(weekNBR);

let week = localStorage.getItem('Week Of The Year');
// console.log(week);
var lfl, lec, emeaMasters;

var urlLeagues = "https://league-of-legends-esports.p.rapidapi.com/leagues";


if (week < weekNBR || weekNBR == 1) {
    
}



