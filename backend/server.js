const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
//on ajoute .config : en faisant ça notre variable d'environnement va être connue
// dans l'ensemble de notre projet

const port = 5000;

// connexion à la DB (on commence à taper et il le trouve et l'importe tt seul comme sur les composants React)
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la "REQ" (request)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//Lancer le serveur
app.listen(port, () => console.log("le serveur a démarré au port " + port));
