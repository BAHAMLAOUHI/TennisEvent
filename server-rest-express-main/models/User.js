const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // Stocke le nom du fichier photo
    required: true,
  },
});

const userModel = mongoose.model("user", User);

module.exports = userModel;
