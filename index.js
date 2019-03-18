const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use("/static", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  const names = ["Jefferson", "David", "Cristian", "Germán"];
  res.render("index", { names });
});

app.post("/hello", (req, res) => {
  res.send(`<h1>Hola ${req.body.name}</h1>`);
});

app.listen(3000, () => console.log("Inició en puerto 3000 ..."));
