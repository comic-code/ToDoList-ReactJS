const Todo = require('./todo'); 

Todo.methods(['get', 'post', 'put', 'delete']);
// Retorna registro novo e faz validação no update
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;