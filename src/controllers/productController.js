const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        // mostrando a listagem
        const products = await Product.find();

        return res.json(products);

    },

    async show(req, res) {
        //mostra o dado devido ao ID
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        //criaçao de um dado-produto
        const product = await Product.create(req.body);

        return res.json(product);

    },

    async update(req, res){
        //atualiza um dado ID
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(product);
    },

    async destroy(req, res){
        //elimmina o dado ID
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }


};