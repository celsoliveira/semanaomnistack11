const express = require("express");
const routes = require("./routes"); //usamos o "./" para indicar que é um arquivo e não uma pasta
const cors = require("cors");
const app = express();

app.use(cors());

//Habilita o formato JSON para as requisições
app.use(express.json());

app.use(routes);

app.listen(3333);