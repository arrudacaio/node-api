const mongoose = require('mongoose');

const Product = mongoose.model('Product');


module.exports = {
    async index(req,res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({/*if you want a filter*/ }, {page, limit: 10});

        return res.json(products);
    },

    async show(req,res){
        const product = await Product.findById(req.params.id);
        
        return res.json(product);
    },
    
    async store(req,res){
        const product = await Product.create(req.body);

        // Returns the product that was just created
        return res.json(product); 
    },
    
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    
        return res.json(product);
    }, 

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);

        // returns answer of success empty
        return res.send();
    }
}