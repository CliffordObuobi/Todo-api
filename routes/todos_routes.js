import express, { Router } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todosController.js';

const todoRouter = Router();

// Define Routes

todoRouter.post("/todos", createTodo);
todoRouter.get("/todos", getTodos);
todoRouter.patch("/todos/:id", updateTodo);
todoRouter.delete("/todos/:id", deleteTodo);

export default todoRouter;