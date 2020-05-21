const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true, useUnifiedTopology: true});

requireDir('./src/models'); // Registering a model in the application

const Product = mongoose.model('Product');

// First route
app.get('/', (req,res) => {
    Product.create({
        title:"React",
        description: 'build native apps with React',
        url: 'www.github.com'
    })

    return res.send('Hello arruda');
});

app.listen(3001);
