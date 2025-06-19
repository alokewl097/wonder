const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


app.use(cors()); // allow cross-origin
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);



app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
