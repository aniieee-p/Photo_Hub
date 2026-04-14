require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');
const authRoutes = require('./routes/auth');
const photoRoutes = require('./routes/photos');
const albumRoutes = require('./routes/albums');
const userRoutes = require('./routes/users');

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
// No static file serving needed — images are served directly from S3

app.use('/api/auth', authRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/users', userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error(err));
