const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("default route");
});

// MIDDLEWARE
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const animalController = require("./controllers/animals");
app.use("/animals", animalController);

// LISTENER
app.listen(3001, () =>
  console.log(`express is listening on port: ${process.env.PORT}`)
);
