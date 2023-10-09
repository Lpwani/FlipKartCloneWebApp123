// const express = require('express');     required syntax for importing express package In early version of NodeJS

import express from 'express';    // After ES6 introduction in NodeJS version 15 & 16 we can also import express package in these way...
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';


const app = express();

dotenv.config();     // to initialiazation of dotenv...

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {console.log(`The server is started on PORT ${PORT} Hello`)});

DefaultData();