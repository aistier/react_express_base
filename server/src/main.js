import express from "express";
import bodyParser from "body-parser";
import api from './routes';

const app = express();

let port = 8080;

app.use(bodyParser.json());

//SERVE STATIC FILES = REACT PROJECT
app.use("/", express.static(__dirname + "/../../client/build"));

//LOAD API FROM ROUTES
app.use("/api", api);

//TO BE IMPLEMENTED
app.listen(port, () => {
  console.log("Express is listening on port", port);
});


