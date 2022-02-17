const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json({limit: '50mb', extended: true}));
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// routes
const router = express.Router();

// primer metodo para usar las rutas
const goals = require("./src/api/goals/goals.routes");
// segundo metodo para usar las rutas
const test = require('./src/api/test/test.routes');

// creo conexion con las rutas primera manera
goals(router);

// crear conexion en las rutas de la segunda forma
app.use('/',test); 



// conectando las rutas con express se necesita para la primera forma
app.use(router);


app.listen(port, () => console.log(`server run in port ${port}`));
