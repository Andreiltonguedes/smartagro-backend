const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('../routes/usuarios');
const sensorRoutes = require('../routes/sensores');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', userRoutes);
app.use('/sensores', sensorRoutes);

module.exports = app;
