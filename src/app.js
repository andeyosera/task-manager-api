const express = require('express');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/tasks');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});