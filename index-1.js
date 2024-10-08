//TODO: Les ROUTES de type GET


const express = require('express');

//app
const app = express();


//une route pour obtenir la liste des plats; C'est une route de type GET (obtention de données)
//on renvoie un tableau de plats
//elle est accessible à l'adresse:  http://localhost:5051/plats    --> note que 5051 est le port sur lequel le serveur est accessible; '/plats' est la route que nous avons configuré pour écouter les requêtes de demande de la liste des plats. Considère ça comme un dossier
app.get('/plats', function (req, res) {
    res.send([
        { name: 'Pizza' },
        { name: 'Pasta' },
        { name: 'Salade' }
    ])
});

//une route pour obtenir les réglages du système
//elle est accessible à l'adresse:  http://localhost:5051/settings/system    --> note que 5051 est le port sur lequel le serveur est accessible; '/settings/system' est la route que nous avons configuré pour consulter ces informations. Ici, il y a deux parties, c'est comme dossier et sous dossier: Dans le dossier 'settings', on la le dossier 'system' qui permet d'accéder aux réglages du système
app.get("/settings/system", function (req, res) {

    //on a les réglages sous forme d'objet javascript
    const settings = {
        theme: "light",
        language: "fr",
        canUserCreateAccount: true,
        maxDatabaseConnections: 10
    }


    //on renvoie les réglages: ceci est la réponse que nous avons formulé pour la requête d'obtention des réglages du système
    res.send(settings)
})


//une route pour obtenir les réglages du compte d'un utilisateur lambda. Ici par exemple, notre Utilisateur a pour Id: 5, d'où /settings/user/5  --> pour dire qu'on veur les réglages d'un utilisateur, et en particulier de l'utilisateur n°5
// elle est accessible à l'adresse:  http://localhost:5051/settings/user/5
app.get("/settings/user/5", (req, res) => {

    //note qu'ici, j'ai utilisé une fonction à flèche qui est beaucoup plus facile à écrire qu'une fonction anonyme.

    const userSettings = {
        id: 5,
        canUpdateInfos: true,
        lastModification: new Date()
    }

    //on renvoie les réglages
    res.send(userSettings)
})



const serveur = app.listen(5051, function () {
    console.log("Le serveur écoute sur le port " + serveur.address().port);
})
