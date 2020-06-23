const mongoose = require('mongoose');
//Usar Promise do Node
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo');