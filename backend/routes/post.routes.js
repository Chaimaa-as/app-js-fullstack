const express = require("express");
const {
  getPosts,
  setPosts,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/post.controller");

// on va utiliser l'objet de route de express
const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);

router.patch("/like-post/:id", likePost);

router.patch("/dislike-post/:id", dislikePost);

// Export du module : comme ça tt notre projet aura accès à ce qui va se passer ici
module.exports = router;
