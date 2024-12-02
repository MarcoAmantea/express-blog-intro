//Importiamo la variabile posts dal file post.js
const postsList = require("./post")

//Inizializziamo express
const express = require("express");
const app = express();
const port = 3001;

//Asset statico, Cartella public dove possono accedere tutti
app.use(express.static("public"));

//Rotta che ritorna testo "server del mio blog"
app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

//Rotta bacheca che ritorna la lista dei post
app.get("/bacheca", (req,res) => {
    const post = {
        posts: postsList,
        totale: postsList.length      
    }
    res.json(post);   
})

//server in ascolto sulla porta 3001 che abbiamo assegnato prima
app.listen (port, () => {
    console.log("Verifichiamo se è partito il server");
})