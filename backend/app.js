require("dotenv").config();
const express = require("express");
const appRoute = require("./src/routes/app.route");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/app", appRoute);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to API!" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Express running on http://localhost:${port}`);
});
