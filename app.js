const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');

const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>
    console.log("DB conectado!")).catch(err => {
        console.log("deu ruim");
    });

requireDir('./app/models');

app.use('/api',require('./app/routes'));

app.listen(3000);