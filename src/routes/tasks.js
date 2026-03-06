const express = require('express');
const router = express.Router();

// In-memory storage (we'll upgrade to a DB later)
let tasks = [
  { id: 1, title: 'Learn deployment', done: false },
  { id: 2, title: 'Build an API', done: true },
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET single task
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});

// POST create task
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const newTask = { id: tasks.length + 1, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PATCH update task
router.patch('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.done !== undefined) task.done = req.body.done;
  res.json(task);
});

// DELETE task
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });
  tasks.splice(index, 1);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
