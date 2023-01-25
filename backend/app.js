require("dotenv").config();
const express = require("express");
const appRoute = require("./src/routes/app.route");
const port = 8000;

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/app", appRoute);

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "Welcome to API!",
    info: {
      characters: 826,
      pages: 42,
    },
    usage: [
      {
        getRandomCharacters:
          "https://rick-and-morty-backend.vercel.app/app/random/characters",
        msg: "This API will provide a random page of characters.",
      },
      {
        getCharactersPerPage:
          "https://rick-and-morty-backend.vercel.app/app/characters/1",
        msg: "This API will give you a specific page, range from 1 to 92.",
      },
      {
        getCharacterById:
          "https://rick-and-morty-backend.vercel.app/app/character/id/1",
        msg: "This API will provide a specific character fetched by ID, range from 1 to 826.",
      },
      {
        getCharacterByName:
          "https://rick-and-morty-backend.vercel.app/app/character/name/Rick",
        msg: "This API will provide single or multiple characters fetched by name",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Express running on http://localhost:${port}`);
});
