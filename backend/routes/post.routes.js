const express = require("express");

// on va utiliser l'objet de route de express
const router = express.Router();

// on recupere ce qu'on avait mis dans le serveur et on remplace app par router et on supprime "post"

// app.get("/post", (req, res) => {
//   res.json({ message: "voici les données choupette" });
// });
router.get("/", (req, res) => {
  res.json({ message: "voici les données choupette" });
});

router.post("/", (req, res) => {
  //   console.log(req.body);c'était pour vérifier
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

// donc maintenant pour faire le CRUD je vais rajouter la route delete
router.delete("/:id", (req, res) => {
  res.json({ message: "Post supprimé id : " + req.params.id });
});
// on veut que chaque route génère un tableau avec les personnes avec leur id associé qui ont liké ce post
router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké : " + req.params.id });
});

//idem pour les dislikes
router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post disliké : " + req.params.id });
});

// Export du module : comme ça tt notre projet aura accès à ce qui va se passer ici
module.exports = router;
