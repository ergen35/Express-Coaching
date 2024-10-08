//TODO: Les Query Strings


const express = require('express');

//app
const app = express();


//on va cette fois-ci définir une route pour obtenir un plat en particulier, mais de façon dynamique.
//dans l'exemple précédent, nous avons récupéré le plat qui a pour Id: 5.
// mais à priori, on ne peut pas connaitre le nombre de plats et créer une route pour chaque plat: D'où les paramètres de requête


//1- On va voir en premier: Les QueryStrings / Query Parameters
//--- ce sont des paramètres de filtrage (ou filtres) qu'on utilise pour agrémenter les fonctionnalités de filtrage sur nos APIs et routes d'APIs.
// (note: API = Application Programming Interface) -- fais une recherche dessus et tu me feras un compte rendu vocal

//--- Exemple de query string:  http://mon-site.com/plats?id=5
//--- Exemple de query string:  http://mon-site.com/plats?search=salade
// Note qu'il y a un point d'interrogation à un emplacement donné dans la requête
// C'est après le point d'interrogation que viennent les Query Strings.
// Les Query Strings sont organisés sous la forme [clé]=[valeur]
//Exemple: id=5
//Exemple: search=salade
//Exemple: theme=dark
//Exemple: token=42ea716e-dccd-40cc-977d-fecda8c2c421
//Donc c'est clé=valeur
//--- On peut naturellement combiner plusieurs query strings pour affiner les recherches
// par exemple, on peut construire une requête pour obtenir les plats dont le nom contient la chaîne de caractères 'salade' et dont le prix est compris entre 5000 et 14900
//On peut faire comme suit: http://mon-site.com/plats?search=salade&minPrice=5000&maxPrice=14900
//Après le symbole "?" on a les paramètres de filtrage suivants: search, minPrice, maxPrice avec leurs valeurs respectives
// Il est important de séparer les query strings pour ne pas tout mélanger, et c'est là que vient le symble " & "
// donc on a {URL}?query1=valeur1&query2=valeur2&query3=valeur3  --- et ainsi de suite



//Une route pour obtenir les plats dont le nom contient la chaîne de caractères 'salade' et dont le prix est compris entre 5000 et 14900
//Dans ton navigateur, navigue vers l'adresse http://localhost:5051/plats                                       --> FAIS le constat
//Ensuite, navigue vers l'adresse http://localhost:5051/plats?search=salade&minPrice=5000&maxPrice=14900        --> FAIS le constat

app.get("/plats", (req, res) => {

    //-- on utilise la propriété "query" de l'objet "Request" (req) fourni par express pour obtenir les query strings
    const search = req.query["search"]   
    const minPrice = req.query["minPrice"]
    const maxPrice = req.query['maxPrice']

    //renvoi d'une réponse et terminaison de la requête
    res.send({
        search: search,
        minPrice: minPrice,
        maxPrice: maxPrice
    })
})


//Ensuite, navigue vers l'adresse http://localhost:5051/plats-2?search=salade&minPrice=5000&maxPrice=14900        --> FAIS le constat

app.get("/plats-2", (req, res) => {

    //-- on utilise la propriété "query" de l'objet "Request" (req) fourni par express pour obtenir les query strings
    const search = req.query.search;   
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;

    res.send({
        search: search,
        minPrice: minPrice,
        maxPrice: maxPrice
    })

    //Conclusion, on peut utiliser une appelation via dictionnaire: req.query["clé"]  Ou une appelation comme propriété: req.query.key
})


//Quand


const serveur = app.listen(5051, function () {
    console.log("Le serveur écoute sur le port " + serveur.address().port);
})
