import express from 'express';

import { addTodo, getAllTodos, deleteTodo } from '../controller/todo-controller.js';

const route = express.Router();

route.post('/todos', addTodo)
route.get('/todos', getAllTodos)
route.delete('/todos/:id', deleteTodo)

export default route;