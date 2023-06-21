var divStream = document.getElementById('divStream');

document.getElementById('stream').addEventListener('click', function() {
    //console.log("Stream");
    displayDivStream();
});


// Stream ***************************************************************************************************************************************************************
var clientId = '09v5b6vch1hsywuyw8j0d5gqxik09j';
var token = 't3n7f5jggjz805e0o5ru1gab2ezpia';
var twitchURL = '';
var header = {
    'Authorization': `Bearer ${token}`,
    'Client-Id': clientId
}
urlName ="https://api.twitch.tv/helix/users?login=";
urlId ="https://api.twitch.tv/helix/streams?user_id=";

function displayDivStream() {
    // affiche info
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divStream.style = "display:block;width:330px;height:222px;";
    MenuAddFav.style = "display: none;"

    // affiche Choice
    options.style = 'display:none;';

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(85, 0, 125, 0);";
        boutons[i].classList = "bustream";
    }
    boutons[0].style = "background-color: rgba(215, 143, 248,0.5); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);";
    icon.src = "../images/icons/twitch.png";
    icon.style = "width:50px; height:50px;"
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function cb(json) {
    if (json.data.length) {
        var division = document.createElement('div');
        division.style = "width:430px;text-align: center;background-color: rgba(215, 143, 248,0.5); margin-bottom:10px;border-radius: 10px;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);";

        var premierLigne = document.createElement('div');
        premierLigne.style = "display:flex; justify-content:center; height : 40px;text-align:center; padding-top:10px;";

        var img;
        try {
            img = localStorage.getItem(json.data[0].user_login);
        } catch {
            img = "";
        }
        var thumbnail = document.createElement('img');
        thumbnail.src = img;
        thumbnail.style = "margin-right : 5px;border-radius:50%; width:30px; height:30px;display:inline;";

        var name = document.createElement('a');
        name.href = "https://twitch.tv/" + json.data[0].user_name;
        name.target = "_blank";
        name.innerHTML = json.data[0].user_name + ":";
        name.className = "linkStream";
        name.style = "display: inline;height: 10px; font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400; margin-right:5px;";

        var ligne = document.createElement('p');
        ligne.innerHTML = "-----------------------";
        ligne.style = "font-family: 'Dongle', sans-serif; margin:0px;";

        var titre = document.createElement('p');
        titre.innerHTML = json.data[0].title;
        titre.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400;font-style: italic; padding-bottom: 10px;padding-right:5px; padding-left:5px;";

        premierLigne.appendChild(thumbnail);
        premierLigne.appendChild(name);
        division.appendChild(premierLigne);
        division.appendChild(ligne);
        division.appendChild(titre);
        divStream.appendChild(division);
    } else {}
}


function fetchTwitchAPI(url) {
    fetch(url, { 
        headers: header 
    }).then((response) =>  {
        return response.json();
    }).then((json) => cb(json));
}

function getStream(id) {
    var url = `https://api.twitch.tv/helix/streams?user_id=${id}`;
    fetchTwitchAPI(url);
}
getStream()

function Stream(json) {
    divStream.innerHTML = "";
    console.log()
    for (let i=0; i < json.data.length; i++) {
        getStream(json.data[i].to_id);
    }
    writeNextStream(0);
}

function writeNextStream(i){
    if(i == 2) {
        var para5 = document.createElement('p');
        para5.innerHTML = "para pour faire une bande blanche en dessous (style)";
        para5.style = "color : rgb(255, 255, 255); margin-top: 9px;"
        divStream.appendChild(para5);
        return;
    }  
    setTimeout(function() {
        // console.log(i)
        writeNextStream(i + 1);
    }, 1000);
}

function getImage(json) {
    console.log('ok')
    var imgStreamer = {};
    for (let i=0; i < json.data.length; i++) {
        var url = `https://api.twitch.tv/helix/users?login=${json.data[i].to_login}`;
        // console.log(url);
        fetch(url, { 
            headers: header 
        }).then((response) =>  {
            return response.json();
        }).then((json) => {
            localStorage.setItem(json.data[0].login, json.data[0].profile_image_url)
        });
    }
}

function getStreamerList() {
    fetch("https://api.twitch.tv/helix/users/follows?from_id=884412255&first=100", { 
        headers: header 
    }).then((response) =>  {
        return response.json();
    }).then((json) => {
        // console.log(json);
        getImage(json);
        Stream(json);
    });
}

// Main code of stream.js
try {
    getStreamerList();
} catch {
    console.log("Bearer Token expired. Please create another one (acces token in Postman)")
}





