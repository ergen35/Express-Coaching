//TODO: Les Query Strings


const express = require('express');

//app
const app = express();


//Dans l'exemple précédent, nous avons vu les Query Strings / Query Parameters.


//2- On va voir ici les Path Parameters

//--- ce sont des paramètres de Sélection (ou sélecteurs) qu'on utilise pour demander de réaliser une opération de MUTATION ou de LECTURE sur une donnée et l'ensemble de ses paramètres/propriétés.

//--- Exemple de Path parameter:  http://mon-site.com/plats/5
//--- Exemple de Path Parameter   http://mon-site.com/client/17f58bf9-9fd9
//--- Exemple de Path Parameter   http://mon-site.com/livres/science-fiction/hartley-adam   --> ici on a le genre de l'oeuvre (science-fiction) et le nom de l'auteur (hartley-adam) qui sont des path parameters
// Note que les Path Parameters sont directement intégrés dans l'URL et ne sont pas vraiment distingués des segments d'URL

//--- EXERCICE: Checher ce qu'est un segment de Route ou un Segment d'URL et m'en faire un résumé vocal


//Une route pour voir les détails du plat qui a pour ID: 17
//Dans ton navigateur, navigue vers l'adresse http://localhost:5055/plats/17                                       --> FAIS le constat

//-- Note que dans la Route définie ci-dessous, on a utilisé un "placeholder" sous la forme de :id  (avec un symbole ":" -- c'est pour dire que tout ce qui va succéder à (/plats') dans l'URL et qui vient immédiatement après le slash de séparation sera considéré comme étant un Path Parameter et que nous souhaitons le nommer 'id'

//-- Ensuite, navigue vers l'adresse http://localhost:5055/plats/17   --> FAIS le constat
//-- Ensuite, navigue vers l'adresse http://localhost:5055/plats/6   --> FAIS le constat
//-- Ensuite, navigue vers l'adresse http://localhost:5055/plats/zeda8x8ex   --> FAIS le constat
app.get("/plats/:id", (req, res) => {

    //-- on utilise la propriété 'params' de l'objet 'Request' (req) fourni par express pour obtenir les Path Parameters
    const idPlat = req.params.id;           //déja, quand on écrit req.params. --- vscode reconnait et nous propose les path parameters que nous avons configurés

    //renvoi d'une réponse et terminaison de la requête
    res.send({
        id: idPlat,
        nom: "Salade",
        price: 1500,
        quantity: 9
    })
})


//Un exemple plus compliqué avec 2 Path params
// Navigue vers l'adresse http://localhost:5055/dishes/chicken/list   --> FAIS le constat
app.get("/dishes/:category/list", (req, res) => {

    const dish_category = req.params.category

    res.send({
        category: dish_category
    })
})

// Navigue vers l'adresse http://localhost:5055/blog/bien-etre/5   --> FAIS le constat
app.get("/blog/:slug/:id", (req, res) => {

    const slug = req.params.slug
    const id = req.params.id

    res.send({
        article_slug: slug,
        article_id: id
    })
})



//-------------- Un exemple qui Utilise les Query Strings & les Path Parameters
// Navigue vers l'adresse http://localhost:5055/blog/bien-etre?author=harv-ecker   --> FAIS le constat
app.get("/blog/:slug", (req, res) => {

    const slug = req.params.slug
    const author = req.query["author"]

    res.send({
        article_slug: slug,
        author: author
    })
})


const serveur = app.listen(5055, function () {
    console.log("Le serveur écoute sur le port " + serveur.address().port);
})
