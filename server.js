const express = require('express');
const mongoose = require('mongoose');
//const {mongourl} = require('./config/keys');

//iniciando o app
const app = express();

// iniciando o DB
//    mongoose.connect(mongourl, { useNewUrlParser:true});
    mongoose.connect("mongodb://localhost:27017/nodeapi", {
         useNewUrlParser:true,
         useUnifiedTopology:true
        });

//criando a primeira rota
app.get('/', (req, res) => {
    res.send('Hello Hello world');

});

//definindo a porta do localhost
app.listen(3001);