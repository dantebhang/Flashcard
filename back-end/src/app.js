const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });


const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const cardsRouter = require("./cards/cards.router")
const decksRouter = require("./decks/decks.router")

app.use(cors());
app.use(express.json());

app.use("/cards", cardsRouter);
app.use("/decks", decksRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;