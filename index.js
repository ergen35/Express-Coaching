//Commencer
//1-- démarrer un projet node js avec la commande: npm init -y
//cette commande va créer le fichier package.json avec les renseignements par défaut
//2-- installer le package de express avec la commande : npm install express
//3-- installer le package de types de express en tant que dépendance de développement (devDependency). ce package va t'aider à avoir l'intellisense et le typage pour mieux travailler avec express, Commande: npm install -D @types/express

//4-- creer un fichier index.js qui va contenir le code 



const express = require('express');


//initialiser une application express simple
const app = express();


//créer une route de type GET :  les requêtes de type GET sont utilisées pour demander des informations au serveur
// la route configurée ici est celle par défaut (slash) "/" et qui correspond à la page la plus haute de ton domaine
// la function anonyme qui accepte deux arguments 'req' pour 'request' & 'res' pour 'response' est ce qu'on appelle un 'Handler', elle va gérer la requête

app.get("/", function(req, res){

    //envoyer une réponse au demandeur
    res.send("Hello World");

})


//démarrer le serveur et lui attacher le port 5050 pour écouter les requêtes

const server = app.listen(5050, function(){
    console.log("listening on port 5050");
})



//va dans ton navigateur et à l'adresse:  http://localhost:5050/    --> Note le petit (slash) à la fin. C'est à lui que correspond la route GET: "/" qu'on a défini plus haut


// CTRL+C               --> dans le terminal Pour arrêter le serveur
// node index.js        --> dans le terminal pour démarrer le serveur