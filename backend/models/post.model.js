const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    likers: {
      type: [String],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
// le 1er argument est le nom et le 2e c'est la structure que c'est censé avoir
