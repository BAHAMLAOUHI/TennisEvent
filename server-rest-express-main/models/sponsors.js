const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Sponsors = new Schema({
  image: {
    type: String,
    required: true,
  }

});

const userModel = mongoose.model("sponsors", Sponsors);

module.exports = userModel;
