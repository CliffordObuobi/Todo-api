import Todo from "../models/todo_models.js";

export const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTodos = async (req, res) => {
  const allTodos = await Todo.find({});
  res.status(200).json({ notes: allTodos });
};

export const updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,

    { new: true, runValidators: true }
  );
  res.json({ update: updatedTodo });
};
