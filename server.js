const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app = express();

mongoose.connect('mongodb+srv://dbNode:dbnode@cluster0-nain3.azure.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true});

requireDir('./src/models'); // Registering a model in the application


// Routes
app.use('/api', require('./src/routes'));


app.listen(3001);
