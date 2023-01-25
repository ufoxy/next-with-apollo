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

async function getRandomCharacters(req, res) {
  const collection = await getCollection(clientPromise, "app", "characters");

  const page = Math.floor(Math.random() * (92 - 1) + 1);
  const limit = 9;
  const skip = page * limit;

  const characters = await collection
    .find({}, { skip: skip, limit: limit })
    .toArray();

  if (!characters) {
    return res.status(404).json({ msg: "Lista de personagens indisponível!" });
  }
  res.status(200).json({ characters });
}

async function getCharactersPerPage(req, res) {
  let pagination = await req.params.page;

  const page = --pagination;
  const limit = 9;
  const skip = page * limit;

  const collection = await getCollection(clientPromise, "app", "characters");

  const characters = await collection
    .find({}, { skip: skip, limit: limit })
    .toArray();

  if (!characters) {
    return res.status(404).json({ msg: "Lista de personagens indisponível!" });
  }

  res.status(200).json({ characters });
}

async function getCharacterById(req, res) {
  let id = Number(await req.params.id);

  const collection = await getCollection(clientPromise, "app", "characters");

  const character = await collection.find({ id: id }).toArray();

  if (!character) {
    return res.status(404).json({ msg: "Personagem não encontrado!" });
  }
  res.status(200).json({ character });
}

async function getCharacterByName(req, res) {
  let name = String(await req.params.name);
  const reg = new RegExp(`^${name}`, "i");

  const collection = await getCollection(clientPromise, "app", "characters");
  let character = await collection.find({ name: { $regex: reg } }).toArray();

  res.status(200).json({ character });
}

module.exports = {
  getCharacters,
  getRandomCharacters,
  getCharactersPerPage,
  getCharacterById,
  getCharacterByName,
};
