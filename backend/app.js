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
  return res.status(200).json({ msg: "Welcome to API!" });
});

app.listen(port, () => {
  console.log(`Express running on http://localhost:${port}`);
});
