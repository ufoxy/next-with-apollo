const mongoose = require("mongoose");
const CharacterSchema = mongoose.Schema({
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: String,
    url: String
  },
  location: {
    name: String,
    url: String
  },
  image: String,
  episode: [String],
  url: String,
  created: String,
});

module.exports = mongoose.model("Character", CharacterSchema);
