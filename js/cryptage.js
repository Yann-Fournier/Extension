var tableau = ['6', 'U', 'z', 's', 'o', 'C', 'Z', '-', 'P', 'E', '¤', 'x', 'S', 'ù', 'm', 'c', 'h', 'w', '£', '8', 'M', 'g', ':', '|', '3', '&', 'n', 'A', 'R', '0', 'G', 'Y', '!', 'µ', 'D', 'T', 'q', 'j', '/', 'I', 'H', '#', 'K', 'V', 'l', 'à', 'F', 'B', ';', 'i', '1', 'r', 'p', 'k', 'b', '5', '$', '?', 'O', 'u', 'a', 'v', '2', '§', 'W', 'e', '%', ',', 'd', 'ç', '°', 'L', 'y', '9', '4', '7', 'N', 'J', '*', '.', 'Q', 't', '@', 'f', '_', 'X'];

function cryptage(cle, mot) {
    let motCrypter = "";
    for (let i = 0; i < mot.length; i++) {
        var indice = tableau.indexOf(mot[i])
        if (indice < tableau.length - cle) {
            motCrypter += tableau[indice+cle]
        } else {
            var ind = indice + cle - tableau.length
            motCrypter += tableau[ind]
        }
    }
    return motCrypter
}

function decryptage(cle, mot) {
    let motDecrypter = "";
    for (let i = 0; i < mot.length; i++) {
        var indice = tableau.indexOf(mot[i])
        if (indice - cle > -1) {
            motDecrypter += tableau[indice - cle]
        } else {
            var valAbs = Math.abs(indice - cle);
            motDecrypter += tableau[tableau.length - valAbs]
        }
    }
    return motDecrypter
}

