// You must not create any application which polls the API more than four times per second or more than 200 times per hour. 
// Applications and users exceeding these rates are likely to be blocked. 
// Caching is permitted and encouraged.

var divFormula1 = document.getElementById('divFormula1');

var year = document.getElementById('year');
// bouton
var buRaces = document.getElementById('races');
var buDrivers = document.getElementById('driverStanding');
var buConstructors = document.getElementById('constructorStanding');
// div
var races = document.getElementById('affRaces');
var drivers = document.getElementById('affDriverStanding');
var constructors = document.getElementById('affConstructorStanding');

document.getElementById('formula1').addEventListener('click', function() {
    //console.log("Formula 1");
    displayDivFormula1();
});

buRaces.addEventListener('click', function() {
    displayRaces();
});

buDrivers.addEventListener('click', function() {
    displayDrivers()
});

buConstructors.addEventListener('click', function() {
    displayConstructors();
});


// Formula 1 ************************************************************************************************************************************************************


var pilots = {
    "Albon": "../images/Formula1/Drivers/albon.png",
    "Alonso": "../images/Formula1/Drivers/alonzo.png",
    "Bottas": "../images/Formula1/Drivers/bottas.png",
    "de Vries": "../images/Formula1/Drivers/devries.png",
    "Gasly": "../images/Formula1/Drivers/gasly.png",
    "Hamilton": "../images/Formula1/Drivers/hamilton.png",
    "Hülkenberg": "../images/Formula1/Drivers/hulkenberg.png",
    "Leclerc": "../images/Formula1/Drivers/leclerc.png",
    "Magnussen": "../images/Formula1/Drivers/magnussen.png",
    "Norris": "../images/Formula1/Drivers/norris.png",
    "Ocon": "../images/Formula1/Drivers/ocon.png",
    "Pérez": "../images/Formula1/Drivers/perez.png",
    "Piastri": "../images/Formula1/Drivers/piastri.png",
    "Russell": "../images/Formula1/Drivers/russell.png",
    "Sainz": "../images/Formula1/Drivers/sainz.png",
    "Sargeant": "../images/Formula1/Drivers/sargeant.png",
    "Stroll": "../images/Formula1/Drivers/stroll.png",
    "Tsunoda": "../images/Formula1/Drivers/tsunoda.png",
    "Verstappen": "../images/Formula1/Drivers/verstappen.png",
    "Zhou": "../images/Formula1/Drivers/zhou.png"
};

var constructeurs = {
    "red_bull": {
        "logo": "../images/Formula1/Teams/RedBull.png", 
        "color":"rgba(255, 255, 255, 1)", 
        "backcolor": "rgba(0, 30, 60, 1);"
    },
    "mercedes": {"logo": "../images/Formula1/Teams/mercedes.png", "color":"rgba(255,255,255,1)", "backcolor": "rgba(27, 27, 27, 1);"},
    "ferrari": {"logo": "../images/Formula1/Teams/ferrari.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(220, 0, 0, 1);"},
    "mclaren": {"logo": "../images/Formula1/Teams/mclaren.png", "color":"rgba(0, 0, 0, 1)", "backcolor": "rgba(255, 135, 0, 1);"},
    "alfa": {"logo": "../images/Formula1/Teams/alfa.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(157, 24, 53, 1);"},
    "aston_martin": {"logo": "../images/Formula1/Teams/aston_martin.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(0, 87, 81, 1);"},
    "alpine": {"logo": "../images/Formula1/Teams/alpine.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(0, 120, 201, 1);"},
    "alphatauri": {"logo": "../images/Formula1/Teams/alfatauri.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(1, 19, 33, 1);"},
    "williams": {"logo": "../images/Formula1/Teams/williams.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(0, 130, 250, 1);"},
    "haas": {"logo": "../images/Formula1/Teams/haas.png", "color":"rgba(0, 0, 0, 1)", "backcolor": "rgba(255, 255, 255, 1);"}
};

var Mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Sept", "Oct", "Nov", "Déc"];

var Points = ["25", "18", "15", "12", "10", "8", "6", "4", "2", "1"];

function displayRaces() {
    buRaces.style = "background-color: rgba(255,255,255,0); border-style: solid;border-color:rgb(255, 86, 86);";
    buDrivers.style = "background-color: rgb(255, 86, 86);";
    buConstructors.style = "background-color: rgb(255, 86, 86);";

    constructors.style = "display:none;"
    drivers.style = "display:none;";
    races.style = "display:block;width:330px;height:322px;";
}

function displayDrivers() {
    buRaces.style = "background-color: rgb(255, 86, 86);";
    buDrivers.style = "background-color: rgba(255,255,255,0); border-style: solid; border-color:rgb(255, 86, 86);";
    buConstructors.style = "background-color: rgb(255, 86, 86);";

    races.style = "display:none;";
    constructors.style = "display:none;";
    drivers.style = "display:block;width:330px;height:322px;"; 
}

function displayConstructors() {
    buRaces.style = "background-color: rgb(255, 86, 86);";
    buDrivers.style = "background-color: rgb(255, 86, 86);";
    buConstructors.style = "background-color: rgba(255,255,255,0); border-style: solid;border-color:rgb(255, 86, 86);";

    races.style = "display:none;";
    drivers.style = "display:none;";
    constructors.style = "display:block;width:330px;height:322px;";
}
function displayDivFormula1() {
    // affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divManga.style = "display:none;";
    divFormula1.style = "display:block;width:330px;height:322px;";
    MenuAddFav.style = "display: none;"

    // affiche choice
    options.style = "padding: 5px;width: 440px;height: 40px;display: flex;justify-content: center;z-index: 100;margin-top: 10px;margin-bottom: 10px;";
    titre.style = "display:none;";
    addFav.style = "display:none;";
    game.style = 'display:none;';
    year.style = "display:flex; flex-direction: row; justify-content: space-between;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].classList = "buformula1";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 0, 0.97);}";
    }
    boutons[3].style = "background-color: rgba(255, 86, 86, 1);box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);";
    //corps.style = "background-color: rgb(255, 112, 112, 1);";
    icon.src = "../images/icons/form1.png";
    icon.style = "width:100px; height:50px;"
    //icon.style = "width:30px; height:30px;"
}


// Get Data $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var weekNBR = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
// localStorage.setItem('Week Of The Year', 22);

var urlRaces = "http://ergast.com/api/f1/current.json";
var urlDrivers = "http://ergast.com/api/f1/current/driverStandings.json";
var urlConstructors = "http://ergast.com/api/f1/current/constructorStandings.json";
var urlNextGP = "http://ergast.com/api/f1/current/next.json";

let week;
try {
    week = localStorage.getItem('Week Of The Year');
} catch {
    localStorage.setItem('Week Of The Year', weekNBR-1);
    week = weekNBR-1;
}


// 
if (((weekNBR > week) || (weekNBR = 1))&& ((currentdate.getDay() == 1 && currentdate.getHours() >= 12) || (currentdate.getDay() > 1))) {
    // fetching what I need and put it in LocalStorage ***************************************************************    
    fetch(urlRaces)
    .then((response) =>  {
        return response.json();
    }).then((json) => {
        localStorage.setItem('Races Front', JSON.stringify(json));
    });

    fetch(urlNextGP)
    .then((response) =>  {
        return response.json();
    }).then((json) => {
        localStorage.setItem('Next GP', JSON.stringify(json));
    });

    writeNext(0);

    fetch(urlDrivers)
    .then((response) =>  {
        return response.json();
    }).then((json) => {
        localStorage.setItem('Drivers', JSON.stringify(json));
    });

    fetch(urlConstructors)
    .then((response) =>  {
        return response.json();
    }).then((json) => {
        localStorage.setItem('Constructors', JSON.stringify(json));
    });

    getAllPodium();

    localStorage.setItem('Week Of The Year', weekNBR);
    console.log("Les data sont en train d'etre récupérer")

    var racesFront = JSON.parse(localStorage.getItem('Races Front'))
    var conducteur = JSON.parse(localStorage.getItem('Drivers'))
    var constructeur = JSON.parse(localStorage.getItem('Constructors'))
    var prochainGP = JSON.parse(localStorage.getItem('Next GP'))
    // console.log(racesFront)
    // console.log(conducteur)
    // console.log(constructeur)
    // console.log(prochainGP)
    RacesFront(racesFront)
    Drivers(conducteur);
    Constructors(constructeur)
    NextGP(prochainGP)
    for (let i = 1; i <= 23; i++) {
        var podium = JSON.parse(localStorage.getItem('podium' + i));
        Podium(podium);
    }
} else {
    console.log("data déjà récupérer")
    var racesFront = JSON.parse(localStorage.getItem('Races Front'))
    var conducteur = JSON.parse(localStorage.getItem('Drivers'))
    var constructeur = JSON.parse(localStorage.getItem('Constructors'))
    var prochainGP = JSON.parse(localStorage.getItem('Next GP'))
    // console.log(racesFront)
    // console.log(conducteur)
    // console.log(constructeur)
    // console.log(prochainGP)
    RacesFront(racesFront)
    Drivers(conducteur);
    Constructors(constructeur)
    NextGP(prochainGP)
    for (let i = 1; i <= 23; i++) {
        var podium = JSON.parse(localStorage.getItem('podium' + i));
        Podium(podium);
    }
}


function writeNext(i){
    if(i == 2)
        return;
    setTimeout(function() {
        // console.log(i)
        writeNext(i + 1);
    }, 1000);
}

async function getPodium(nbr) {
    fetch("http://ergast.com/api/f1/current/" + nbr + "/results.json")
    .then((response) =>  {
        return response.json();
    }).then((json) => {
        localStorage.setItem('podium' + nbr, JSON.stringify(json));
    });
}

async function getAllPodium() {
    for (let i = 1; i <= 23; i++) {
        await getPodium(i)
    }
}



// Affichage Data $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function numDateToString(date) {
    if (date[8] == "0") {
        var jour = date[9];
    } else {
        var jour = date[8] + date[9];
    }
    if (date[5] === "0") {
        var mois = Mois[parseInt(date[6], 10) - 1];
    } else {
        var mois = Mois[parseInt(date[5] + date[6], 10)-1];
    }
    return jour + " " + mois
} 

function hourToHour(heure) {
    return (parseInt(heure[0] + heure[1]) + 2) + heure[2] + heure[3] + heure[4]
}

// transform: rotateY(180deg);
// https://www.w3schools.com/howto/howto_css_flip_card.asp

// front des cartes des courses
function RacesFront(json) {
    var courses = json.MRData.RaceTable.Races;
    //console.log(courses)
    courses.forEach(element => {
        var flipCard = document.createElement('div');
        flipCard.className = "flip-card";

        var flipCardInner = document.createElement('div');
        flipCardInner.className = "flip-card-inner";

        // division front --------------------------------------------------------
        var divisionFront = document.createElement('div');
        divisionFront.className = "divisionRacesFront"
        divisionFront.id = element.raceName;
 
        var numero = document.createElement('p');
        numero.innerHTML = element.round + ".";
        numero.style = "display: inline; font-size:65px; margin-top:8px; margin-bottom: 0px;font-family: 'Dongle', sans-serif;padding-left:20px;color: rgb(0, 0, 0);";

        var gpName = document.createElement('p');
        gpName.innerHTML = element.raceName;
        gpName.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;margin-top:33px;margin-bottom:0px;font-weight: 400;color:rgb(0,0,0);";

        var date = document.createElement('p');
        date.innerHTML = numDateToString(element.date);
        date.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 30px;font-weight: 400;margin-top:32px;margin-bottom:0px;color:rgb(0,0,0);";
        
        divisionFront.appendChild(numero);
        divisionFront.appendChild(gpName);
        divisionFront.appendChild(date);
        flipCardInner.appendChild(divisionFront);

        // division back --------------------------------------------------------
        var divisionBack = document.createElement('div');
        divisionBack.className = "divisionRacesBack";
        divisionBack.id = element.raceName+"B";

        // Dimanche --------------------------------------------------------
        var sunday = document.createElement('div');
        //sunday.innerHTML = "Sunday" //+ hourToHour(element.time);
        sunday.style = "display: flex; flex-direction:column; font-family: 'Dongle', sans-serif;font-size: 30px;font-weight: 400;margin-top:0px;margin-bottom:0px;color:rgb(0,0,0);";

        var sund = document.createElement('p');
        sund.innerHTML = "Dim " + numDateToString(element.date);
        sund.style = "margin-top: 0px; margin-bottom: 0px; font-size: 30px;";

        var course = document.createElement('p');
        course.innerHTML = "Race : " + hourToHour(element.time);
        course.style = "display: inline; margin-top: 0px; margin-bottom: 0px; font-size:20px;";
        
        sunday.appendChild(sund);
        sunday.appendChild(course);

        var fp1 = element.FirstPractice;
        var fp2 = element.SecondPractice;;
        var qualif = element.Qualifying;

        var friday = document.createElement('div');
        friday.innerHTML = "Ven " + numDateToString(fp1.date);
        friday.style = "display: flex; flex-direction:column; font-size:30px; margin:0px;font-family: 'Dongle', sans-serif;padding-left:20px;color: rgb(0, 0, 0);";

        var saturday = document.createElement('div');
        saturday.style = "display: flex; flex-direction:column;font-family: 'Dongle', sans-serif;font-size: 30px;margin-top:0px;margin-bottom:0px;font-weight: 400;color:rgb(0,0,0);";
        
        var freeP1 = document.createElement('p');
        freeP1.innerHTML = "FP1 : " + hourToHour(fp1.time);
        freeP1.style = "display: inline; margin-top: 0px; margin-bottom: 0px; font-size:20px;"; 
        friday.appendChild(freeP1);    
        
        var freeP2 = document.createElement('p');
        freeP2.innerHTML = "FP2 : " + hourToHour(fp2.time);
        freeP2.style = "display: inline; margin-top: 0px; margin-bottom: 0px; font-size:20px;";
        if (fp2.date === fp1.date) {
            friday.appendChild(freeP2); 
        } else {
            saturday.innerHTML = "Sam " + numDateToString(fp2.date);
            saturday.appendChild(freeP2); 
        }

        try {
            var fp3 = element.ThirdPractice;
            saturday.innerHTML = "Sam " + numDateToString(fp3.date);
            var freeP3 = document.createElement('p');
            freeP3.innerHTML = "FP3 : " + hourToHour(fp3.time);
            freeP3.style = "display: inline; margin-top: 0px; margin-bottom: 0px; font-size:20px;"; 
            saturday.appendChild(freeP3);
        } catch (error) {
            var sprint = element.Sprint;
            var spr = document.createElement('p');
            spr.innerHTML = "Sprint : " + hourToHour(sprint.time);
            spr.style = "display: inline; margin-top: 0px; margin-bottom: 0px; font-size:20px;"; 
            if (sprint.date === fp1.date) {
                friday.appendChild(spr); 
            } else {
                saturday.appendChild(spr); 
            } 
        }

        var qual = document.createElement('p');
        qual.innerHTML = "Qualifying : " + hourToHour(qualif.time);
        qual.style = "display: inline; margin-top: 0px; margin-bottom: 0px; font-size:20px;"; 
        if (qualif.date === fp1.date) {
            friday.appendChild(qual); 
        } else {
            saturday.appendChild(qual); 
        }

        divisionBack.appendChild(friday);
        divisionBack.appendChild(saturday);
        divisionBack.appendChild(sunday);
        flipCardInner.appendChild(divisionBack);

        flipCard.appendChild(flipCardInner);
        races.appendChild(flipCard);
    });
    var para = document.createElement('p');
    para.innerHTML = "para pour faire une bande blanche en dessous (style)";
    para.style = "color : rgb(255, 255, 255); margin-top: 9px;"
    races.appendChild(para);

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    var cards = document.querySelectorAll(".flip-card-inner");
    cards.forEach((card) => {
        card.addEventListener( 'click', function() {
            if (card.classList.contains('is-flipped')){
                card.classList.remove('is-flipped');
            } else {
                card.classList.add('is-flipped'); 
            }

        });
    });
}



// Front de la carte de la prochaine Course
function NextGP(json) {
    var next = document.getElementById(json.MRData.RaceTable.Races[0].raceName);
    //console.log(next)
    next.className = "divisionNextRacesFront";

    var nextBack = document.getElementById(json.MRData.RaceTable.Races[0].raceName + "B");
    //console.log(next)
    nextBack.className = "divisionNextRacesBack";
}


function Podium(json) {
    if (json.MRData.RaceTable.Races.length !== 0) {
        var circuit = document.getElementById(json.MRData.RaceTable.Races[0].raceName + "B");
        circuit.innerHTML = "";
        circuit.Name = "divisionPastRecesBack"
       
        var results = document.createElement('div');
        results.style = "display: flex; flex-direction: column; width: 200px;height: 100%;margin-left:40px;padding:2px;";

        var premier = document.createElement('div');
        premier.style = "display: flex; flex-direction: row;";
        var premierPlace = document.createElement('img');
        premierPlace.src = "../images/Formula1/or.png";
        premierPlace.className = "trophee";
        var premierDriv = document.createElement('p');
        premierDriv.innerHTML = json.MRData.RaceTable.Races[0].Results[0].Driver.familyName + " (+" + json.MRData.RaceTable.Races[0].Results[0].points + " pts)";
        premierDriv.style = "display: inline;font-size:25px;font-family: 'Dongle', sans-serif; margin:0px;padding-left:10px;";
        premier.appendChild(premierPlace);
        premier.appendChild(premierDriv);

        var deuxieme = document.createElement('div');
        deuxieme.style = "display: flex; flex-direction: row;";
        var deuxiemePlace = document.createElement('img');
        deuxiemePlace.src = "../images/Formula1/argent.png";
        deuxiemePlace.className = "trophee";
        var deuxiemeDriv = document.createElement('p');
        deuxiemeDriv.innerHTML = json.MRData.RaceTable.Races[0].Results[1].Driver.familyName + " (+" + json.MRData.RaceTable.Races[0].Results[1].points + " pts)";
        deuxiemeDriv.style = "display: inline;font-size:25px;font-family: 'Dongle', sans-serif;margin:0px;padding-left:10px;";
        deuxieme.appendChild(deuxiemePlace);
        deuxieme.appendChild(deuxiemeDriv);

        var troisieme = document.createElement('div');
        troisieme.style = "display: flex; flex-direction: row;";
        var troisiemePlace = document.createElement('img');
        troisiemePlace.src = "../images/Formula1/bronze.png";
        troisiemePlace.className = "trophee";
        var troisiemeDriv = document.createElement('p');
        troisiemeDriv.innerHTML = json.MRData.RaceTable.Races[0].Results[2].Driver.familyName + " (+" + json.MRData.RaceTable.Races[0].Results[2].points + " pts)";
        troisiemeDriv.style = "display: inline;font-size:25px;font-family: 'Dongle', sans-serif;margin:0px;padding-left:10px;";
        troisieme.appendChild(troisiemePlace);
        troisieme.appendChild(troisiemeDriv);

        results.appendChild(premier);
        results.appendChild(deuxieme);
        results.appendChild(troisieme);
        
        var fastestLap = document.createElement('div');
        fastestLap.style = "display:flex; flex-direction:column; margin-right: 10px;";
        var fastestTitre = document.createElement('p');
        fastestTitre.innerHTML = "Fastest Lap";
        fastestTitre.style = "display: inline;font-size:30px;font-family: 'Dongle', sans-serif;margin:0px;";
        var fastestDriv = document.createElement('p');
        fastestDriv.style = "display: inline;font-size:20px;font-family: 'Dongle', sans-serif;margin:0px;";
        var fastestTime = document.createElement('p');
        fastestTime.style = "display: inline;font-size:20px;font-family: 'Dongle', sans-serif;margin:0px;";

        for (let i= 0; i < 10; i++) {
            if (json.MRData.RaceTable.Races[0].Results[i].points !== Points[i]) {
                fastestDriv.innerHTML = json.MRData.RaceTable.Races[0].Results[i].Driver.familyName;
                fastestTime.innerHTML = json.MRData.RaceTable.Races[0].Results[2].FastestLap.Time.time;
            }
        }

        for (let i= 10; i < 20; i++) {
            if (json.MRData.RaceTable.Races[0].Results[i].points !== "0") {
                fastestDriv.innerHTML = json.MRData.RaceTable.Races[0].Results[i].Driver.familyName;
                fastestTime.innerHTML = json.MRData.RaceTable.Races[0].Results[2].FastestLap.Time.time;
            }
        }

        fastestLap.appendChild(fastestTitre);
        fastestLap.appendChild(fastestDriv);
        fastestLap.appendChild(fastestTime);

        circuit.appendChild(results);
        circuit.appendChild(fastestLap)
    } 
}



// Affichages du driver standing
function Drivers(json) {
    var driv = json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    //console.log(driv);
    driv.forEach(element => {

        var division = document.createElement('div');
        division.style = "display: flex; flex-direction: row; justify-content: space-between; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); margin-top: 5px; margin-bottom: 5px; border-radius: 10px; width: 400px;height:90px; vertical-align: middle; padding-left: 0px;padding-right: 30px;font-size:80px; background-color:" + constructeurs[element.Constructors[0].constructorId].backcolor;
        //division.className = "";

        var place = document.createElement('p');
        place.innerHTML = element.position + ".";
        place.style = "display: inline; font-size:70px; margin-top:0px;margin-bottom: 0px;font-family: 'Dongle', sans-serif;padding-left:20px;color:" + constructeurs[element.Constructors[0].constructorId].color;

        var divPilot = document.createElement('div');
        divPilot.style = "display: flex; flex-direction: row; justify-content: center; text-align: center;";

        var photo = document.createElement('img');
        photo.src = pilots[element.Driver.familyName];
        photo.style = "width: 70px; height:70px;border-radius: 100%;margin-right:10px;margin-top:10px;margin-bottom:0px;";

        var name = document.createElement('p');
        name.innerHTML = element.Driver.familyName;
        name.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;margin-top:28px;margin-bottom:0px;font-weight: 400;color:" + constructeurs[element.Constructors[0].constructorId].color;

        var points = document.createElement('p');
        points.innerHTML = element.points;
        points.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 50px;font-weight: 400;margin-top:11px;margin-bottom:0px;color:" + constructeurs[element.Constructors[0].constructorId].color;

        divPilot.appendChild(photo);
        divPilot.appendChild(name);
        division.appendChild(place);
        division.appendChild(divPilot);
        division.appendChild(points);
        drivers.appendChild(division);
    });

    var para = document.createElement('p');
    para.innerHTML = "para pour faire une bande blanche en dessous (style)";
    para.style = "color : rgb(255, 255, 255); margin-top: 9px;"
    drivers.appendChild(para);
}



// affichage du constructors standing
function Constructors(json) {
    var constru = json.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    //console.log(constru);
    constru.forEach(element => {
        var division = document.createElement('div');
        division.style = "display: flex; flex-direction: row; justify-content: space-between; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); margin-top: 5px; margin-bottom: 5px; border-radius: 10px; width: 400px;height: 90px; vertical-align: middle; padding-left: 0px;padding-right: 30px;font-size:80px; background-color:" + constructeurs[element.Constructor.constructorId].backcolor;

        var place = document.createElement('p');
        place.innerHTML= element.position + ".";
        place.style = "display: inline; font-size:70px; margin:0px;font-family: 'Dongle', sans-serif;padding-left:20px; color:" + constructeurs[element.Constructor.constructorId].color;

        var divTeams = document.createElement('div');
        divTeams.style = "display: flex; flex-direction: row; justify-content: center; text-align: center;";

        var logo = document.createElement('img');
        logo.src = constructeurs[element.Constructor.constructorId].logo;
        logo.style = "width: 70px; height:70px;border-radius: 100%;margin-right:10px;margin-top:10px; margin-bottom:0px;";

        var name = document.createElement('p');
        name.innerHTML = element.Constructor.name;
        name.style = "display: inline;font-family: 'Dongle', sans-serif;margin-top:28px; margin-bottom:0px; font-size: 25px;font-weight: 400; color:" + constructeurs[element.Constructor.constructorId].color;

        var points = document.createElement('p');
        points.innerHTML = element.points;
        points.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 50px;font-weight: 400;margin-top: 11px;margin-bottom: 0px; color:" + constructeurs[element.Constructor.constructorId].color;

        divTeams.appendChild(logo);
        divTeams.appendChild(name);
        division.appendChild(place);
        division.appendChild(divTeams);
        division.appendChild(points)
        constructors.appendChild(division);
    });
    var para = document.createElement('p');
    para.innerHTML = "para pour faire une bande blanche en dessous (style)";
    para.style = "color : rgb(255, 255, 255); margin-top: 9px;"
    constructors.appendChild(para);
    
}


