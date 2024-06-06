const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Database Connection
const connectDB = require('./config/db');
connectDB();

// Routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/director', require('./routes/directorRoutes'));
app.use('/api/teacher', require('./routes/teacherRoutes'));
app.use('/api/inspector', require('./routes/inspectorRoutes'));
app.use('/api/assistant', require('./routes/assistantRoutes'));

// Error Handling Middleware
app.use(require('./middleware/errorHandler'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));