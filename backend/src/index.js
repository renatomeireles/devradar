const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const routes = require("./routes");
const cors = require("cors");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

//Mongo-DB (Não-relacional)

mongoose.set("useCreateIndex", true); //Corrigir DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.connect(
  "mongodb://renato:renato123@cluster0-shard-00-00-prueg.gcp.mongodb.net:27017,cluster0-shard-00-01-prueg.gcp.mongodb.net:27017,cluster0-shard-00-02-prueg.gcp.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
