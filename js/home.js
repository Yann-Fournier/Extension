var divHome = document.getElementById('divHome');
var addFav = document.getElementById('addFavoris')
var menuAddFav = document.getElementById('MenuAddFav');
var menuRemFav = document.getElementById('MenuRemFav');

addFav.style = "display:flex";

// Mise en forme Home
for (let i=0; i<boutons.length; i++) {
    boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
    boutons[i].classList.add("buhome");
}
boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);";


document.getElementById('home').addEventListener('click', function() {
    //console.log("Home");
    displayDivHome();
});

// document.getElementById('buAddFavori').addEventListener('click', function() {
//     displayAddMenu();
// });

document.getElementById('buValFav').addEventListener('click', function() {
    addFavoris();
    
});
document.getElementById('buQuiteFav').addEventListener('click', function() {
    menuAddFav.style = "display:none";
});

document.getElementById('buValRemF').addEventListener('click', function() {
    // en attente
});

function displayDivHome() {
    // Affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divHome.style = "display:block;width:330px;height:222px;";

    // affiche Choice
    options.style = 'display:none;';

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].className = 'buhome';
        //boutons[i].style.cssText ="button:hover {background-color: rgba(0, 34, 255, 0.477);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);";
    //corps.style = "background-color: rgba(178, 255, 255, 1);";
    icon.src = "../images/icons/maison.png";
    icon.style = "width:50px; height:50px;"
}


// Home *****************************************************************************************************************************************************************
function renderHome(array) {
    document.getElementById('divHome').innerHTML = '';

    array.forEach(function (elm) {
        const division = document.createElement('div');
        division.classList = "divisionFav";

        const image =   document.createElement('img');
        if(elm.Image.length !== 0) {
            image.src = '../images/favoris/' + elm.Image;
        } else {
            image.src = '../images/favoris/interrogation.png';
        }
        if (elm.Nom === "Formula 1 Store") {
            image.style = "width: 50px; height:25px;"
        } else if (elm.Nom === "Liquipedia") {
            image.style = "width: 45px; height:30px;"
        }else if (elm.Nom === "Gmail") {
            image.style = "width: 35px; height:25px;"
        } else {
            image.style = "width: 30px; height:30px;"
        }
        division.appendChild(image);

        const nom = document.createElement('a');
        nom.href = elm.Url;
        nom.target = "_blank";
        nom.classList = 'linkHome';
        nom.innerHTML = elm.Nom;
        division.appendChild(nom);

        const deletButtom = document.createElement('button');
        deletButtom.classList = 'buDeleteFav'
        const imgCroix = document.createElement('img');
        imgCroix.classList = 'croixFav';
        imgCroix.src = '../images/icons/croix.png';
        deletButtom.appendChild(imgCroix);
        deletButtom.id = elm.Id;
        imgCroix.id = elm.Id
        division.appendChild(deletButtom)

        divHome.appendChild(division);
    });

    var parag = document.createElement('p')
    parag.innerHTML = "para pour faire une bande blanche en dessous (style)";
    parag.style = "color : rgb(255, 255, 255); margin: 0px;font-size:7px;"
    divHome.appendChild(parag);
}


fetch('../json/home.json')
.then((response) => {
    return response.json();})
.then((jsondata) => {
    renderHome(jsondata.Favoris);
});