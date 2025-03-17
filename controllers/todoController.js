const Todo = require('../models/todoModel');

exports.getAllTodos = (req, res) => {
    const todos = Todo.getAll();
    res.status(200).json(todos);
};

exports.getTodoById = (req, res) => {
    const todo = Todo.getById(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
};

exports.createTodo = (req, res) => {
    const { description } = req.body;

    const newTodo = Todo.create({description });
    res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
    const updatedTodo = Todo.update(req.params.id, req.body);
    if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo);
};

exports.deleteTodo = (req, res) => {
    const deleted = Todo.delete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(204).end();
};
