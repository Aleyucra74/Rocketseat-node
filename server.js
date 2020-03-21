const express = require('express');
const mongoose = require('mongoose');
//const {mongourl} = require('./config/keys');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

// iniciando o DB
//    mongoose.connect(mongourl, { useNewUrlParser:true});
    mongoose.connect("mongodb://localhost:27017/nodeapi", {
         useNewUrlParser:true,
         useUnifiedTopology:true
        });
require('./src/models/Product'); 


const Product = mongoose.model('Product');

//criando a primeira rota
app.get('/', (req, res) => {
    // inserindo dados no mongodb
    Product.create({
        title: 'React native',
        description: 'Build native apps with react',
        url: 'http://github.com/facebook/react-native'
    });


   return res.send('Hello Hello world');

});

//definindo a porta do localhost
app.listen(3001);