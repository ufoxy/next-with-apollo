const clientPromise = require("../services/db.service");
const getCollection = require("../services/collection.service");

async function getCharacters(req, res) {

  const collection = await getCollection(clientPromise, "app", "characters");

  const characters = await collection.find().toArray();
  
  if (!characters) {
    return res.status(404).json({ msg: "Lista de personagens indisponível!" });
  }

  res.status(200).json({ characters });
}

module.exports = {
  getCharacters,
};
