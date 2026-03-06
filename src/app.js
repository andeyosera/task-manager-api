const express = require('express');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Health check (deployment platforms use this)
app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
