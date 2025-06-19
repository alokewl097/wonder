// backend/config/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://72.167.223.133:27017/wonder_exch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});
