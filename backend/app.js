require("dotenv").config();
const express = require("express");
const appRoute = require("./src/routes/app.route");
const port = 8000

const app = express();

app.use(express.json());

app.use("/app", appRoute);

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Welcome to API!" });
});

app.listen(port, () => {
  console.log(`Express running on http://localhost:${port}`);
});
