require("dotenv").config();

const express = require("express");
const { PORT } = process.env;
const knex = require("knex");
const knexFile = require("./knexfile");
const { Model } = require("objection");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.set("view engine", "pug");

app.use("/", require("./routes/index"));
app.use("/api/users", require("./api/users"));

Model.knex(knex(knexFile.development));

app.listen(PORT, () => {
  console.log(`Express API listening on port ${PORT}.`);
});
