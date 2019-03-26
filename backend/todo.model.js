const mongoose = require('mongoose');
//access mongo databse
const Schema = mongoose.Schema;
let Todo = new Schema({
    todo_description: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);