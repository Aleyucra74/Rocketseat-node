const express = require('express');
const mongoose = require('mongoose');
//const {mongourl} = require('./config/keys');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());

// iniciando o DB
//    mongoose.connect(mongourl, { useNewUrlParser:true});
    mongoose.connect("mongodb://localhost:27017/nodeapi", {
         useNewUrlParser:true,
         useUnifiedTopology:true
        });
require('./src/models/Product'); 


 
//Routes
app.use('/api', require('./src/routes'));



//definindo a porta do localhost
app.listen(3001);