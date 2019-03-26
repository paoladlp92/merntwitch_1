const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 3000;
let Todo = require('./todo.model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/mernEntry', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
//mernEntry
//https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61
//add an endpoint delivering all available todos items
//retrieve form mongodb database
todoRoutes.route('/').get(function(req, res) {
    Todo.find({}, function(err, todos) {
        console.log(err, todos);
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

//retrieve a todo item using ID. 
//todo object  attached to the HTTP response in JSON format
todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

//dd new todo items
//new item is then saved to the database by calling the save method
todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save(todo)
        .then(record => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

//update an existing todo item
todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_completed = req.body.todo_completed;
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
app.use('/todos', todoRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

//postman: http://localhost:3000/todos/:id