const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
// iniciando o DB
app.use(cors()); //acessar api puublicamente nao entendi ainda vou pesquisar melhor
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