// const express = require('express');     required syntax for importing express package In early version of NodeJS

import express from 'express';    // After ES6 introduction in NodeJS version 15 & 16 we can also import express package in these way...
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';



const app = express();

dotenv.config();     // to initialiazation of dotenv...

app.use(cors(
    {
      origin: ["https://flipkartclonewebapp-frontend.vercel.app"],
      methods: ["POST", "GET"],
      credentials: true
    }
));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL || `mongodb://${USERNAME}:${PASSWORD}@ac-wy6qpik-shard-00-00.kqcp3by.mongodb.net:27017,ac-wy6qpik-shard-00-01.kqcp3by.mongodb.net:27017,ac-wy6qpik-shard-00-02.kqcp3by.mongodb.net:27017/ECOMMERCE-WEB?ssl=true&replicaSet=atlas-g4ralu-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => {console.log(`The server is started on PORT ${PORT} Hello`)});


DefaultData();

